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

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email, {
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        imgSrc: true,
        password: true,
        roles: true,
      },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const { password: p, ...payload } = user;

    return payload;
  }

  async register(registerUserInput: RegisterUserInput) {
    const user = await this.userService.findOneByEmail(registerUserInput.email);

    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const password = await bcrypt.hash(registerUserInput.password, 12);

    const newUser = await this.userService.createUser({
      ...registerUserInput,
      password,
    });

    return this.logIn(newUser);
  }

  async logIn(user: User) {
    const payload = { sub: user.id, email: user.email };

    return {
      accessToken: await this.jwtService.signAsync(payload),
      user,
    };
  }
}
