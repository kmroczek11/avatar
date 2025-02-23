import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterUserInput } from './inputs/register-user.input';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { User } from 'src/@generated/user/user.model';
import { RedisService } from 'src/redis/redis.service';
import { AutoLogInUserInput } from './inputs/autoLogIn-user.input';
import { LogOutUserInput } from './inputs/logOut-user.input';
import { LogInUserInput } from './inputs/logIn-user.input';
import { ChangeEmailInput } from './inputs/change-email.input';
import { ChangePasswordInput } from './inputs/change-password.input';
import { ChangeProfilePicInput } from './inputs/change-profile-pic.input';
import { FileUpload } from 'graphql-upload-ts';
import { removeFile, saveImage } from './helpers/image-storage';
import { ForgotPasswordInput } from './inputs/forgot-password.input';
import * as generator from 'generate-password';
import { MailService } from 'src/mail/mail.service';
import { ConfigService } from '@nestjs/config';
import { RefreshTokenInput } from './inputs/refresh-token.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
    private readonly mailService: MailService,
    private readonly configService: ConfigService,
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email, {
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        imgSrc: true,
        password: true,
        phoneNumber: true,
        roles: true,
      },
    })

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid email or password')
    }

    const { password: p, ...payload } = user

    return payload
  }

  async register(registerUserInput: RegisterUserInput) {
    const userWithEmail = await this.userService.findOneByEmail(registerUserInput.email)

    if (userWithEmail) {
      throw new HttpException('User with email already exists', HttpStatus.BAD_REQUEST)
    }

    const userWithPhoneNumber = await this.userService.findOneByPhoneNumber(registerUserInput.phoneNumber)

    if (userWithPhoneNumber) {
      throw new HttpException('User with phone number already exists', HttpStatus.BAD_REQUEST)
    }

    const password = await bcrypt.hash(registerUserInput.password, 12)

    const newUser = await this.userService.createUser({
      ...registerUserInput,
      password,
    })

    return this.sign(newUser)
  }

  async logIn(logInUserInput: LogInUserInput) {
    const user = await this.userService.findOneByEmail(logInUserInput.email)

    return this.sign(user)
  }

  async sign(user: User) {
    const payload = { sub: user.id, email: user.email }

    const accessTokenSecret = this.configService.get<string>('accessTokenSecret')
    const accessTokenExpiration = this.configService.get<string>('accessTokenExpiration')
    const refreshTokenSecret = this.configService.get<string>('refreshTokenSecret')
    const refreshTokenExpiration = this.configService.get<string>('refreshTokenExpiration')

    const accessToken = await this.jwtService.signAsync(payload, {
      secret: accessTokenSecret,
      expiresIn: accessTokenExpiration,
    })

    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: refreshTokenSecret,
      expiresIn: refreshTokenExpiration,
    })

    await this.redisService.saveAccessToken(user.id, accessToken)

    await this.redisService.saveRefreshToken(user.id, refreshToken)

    await this.redisService.saveUser(user.id, user)

    return {
      userId: user.id
    }
  }

  async refreshToken(refreshTokenInput: RefreshTokenInput) {
    const { refreshToken } = refreshTokenInput

    const refreshTokenSecret = this.configService.get<string>('refreshTokenSecret')

    const decodedToken = this.jwtService.verify(refreshToken, {
      secret: refreshTokenSecret,
    })

    const user = await this.redisService.getUser(decodedToken.sub)

    if (!user) {
      throw new UnauthorizedException('Invalid refresh token')
    }

    const accessTokenSecret = this.configService.get<string>('accessTokenSecret')
    const accessTokenExpiration = this.configService.get<string>('accessTokenExpiration')

    const newAccessToken = await this.jwtService.signAsync(
      {
        sub: decodedToken.sub,
        email: decodedToken.email
      },
      {
        secret: accessTokenSecret,
        expiresIn: accessTokenExpiration
      }
    )

    await this.redisService.saveAccessToken(decodedToken.sub, newAccessToken)

    return {
      accessToken: newAccessToken,
    }
  }

  async autoLogIn(autoLogInUserInput: AutoLogInUserInput) {
    const user = await this.userService.findOneById(autoLogInUserInput.userId)

    return this.sign(user)
  }

  async logOut(logOutUserInput: LogOutUserInput) {
    const { userId } = logOutUserInput

    await this.redisService.removeUser(userId)

    await this.redisService.removeAccessToken(userId)

    await this.redisService.removeRefreshToken(userId)

    return {
      msg: 'Success',
    }
  }

  async changeEmail(changeEmailInput: ChangeEmailInput) {
    const updatedUser = await this.userService.updateById(
      changeEmailInput.id,
      {
        email: changeEmailInput.email,
      },
    )

    return this.sign(updatedUser)
  }

  async changePassword(changePasswordInput: ChangePasswordInput) {
    const { password: oldPassword } = await this.userService.findOneById(
      changePasswordInput.id,
      {
        select: { password: true }
      },
    )

    const valid = await bcrypt.compare(
      changePasswordInput.oldPassword,
      oldPassword,
    )

    if (!valid) {
      throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST)
    }

    const newPassword = await bcrypt.hash(changePasswordInput.newPassword, 12)

    const updatedUser = await this.userService.updateById(
      changePasswordInput.id,
      {
        password: newPassword,
      },
    )

    return this.sign(updatedUser)
  }

  async changeProfilePic(changeProfilePicInput: ChangeProfilePicInput) {
    const { userId, image } = changeProfilePicInput

    const imageData: FileUpload = await image

    if (!imageData) {
      throw new HttpException('No file provided', HttpStatus.BAD_REQUEST)
    }

    const user = await this.userService.findOneById(userId)

    if (user.imgSrc) {
      await removeFile(user.imgSrc)
    }

    const filePath = await saveImage(imageData, 'users')

    const updatedUser = await this.userService.updateById(userId, {
      imgSrc: filePath,
    })

    return this.sign(updatedUser)
  }

  async forgotPassword(forgotPasswordInput: ForgotPasswordInput) {
    const { email } = forgotPasswordInput

    const generatedPassword = generator.generate({
      length: 10,
      numbers: true,
    })

    const password = await bcrypt.hash(generatedPassword, 12)

    await this.userService.updateByEmail(email, { password })

    await this.mailService.sendForgotPassword(email, generatedPassword)

    return {
      msg: 'Success',
    }
  }
}
