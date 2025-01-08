import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LogInResponse } from './responses/logIn-response';
import { RegisterUserInput } from './inputs/register-user.input';
import { Public } from './decorators/public.decorator';
import { LogInUserInput } from './inputs/logIn-user.input';
import { LogInAuthGuard } from './guards/logIn-auth.guard';
import { UseGuards } from '@nestjs/common';
import { AutoLogInUserInput } from './inputs/autoLogIn-user.input';
import { LogOutResponse } from './responses/logOut-response';
import { Roles } from './decorators/roles.decorator';
import { Role } from 'src/@generated/prisma/role.enum';
import { LogOutUserInput } from './inputs/logOut-user.input';
import { ChangeEmailResponse } from './responses/change-email-response';
import { ChangeEmailInput } from './inputs/change-email.input';
import { ChangePasswordResponse } from './responses/change-password-response';
import { ChangePasswordInput } from './inputs/change-password.input';
import { ChangeProfilePicResponse } from './responses/change-profile-pic-response';
import { ChangeProfilePicInput } from './inputs/change-profile-pic.input';
import { ForgotPasswordResponse } from './responses/forgot-password-response';
import { ForgotPasswordInput } from './inputs/forgot-password.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) { }

  @Mutation(() => LogInResponse)
  @Public()
  registerUser(
    @Args('registerUserInput') registerUserInput: RegisterUserInput,
  ): Promise<LogInResponse> {
    return this.authService.register(registerUserInput);
  }

  @Mutation(() => LogInResponse)
  @Public()
  @UseGuards(LogInAuthGuard)
  logInUser(
    @Args('logInUserInput') logInUserInput: LogInUserInput,
  ): Promise<LogInResponse> {
    return this.authService.logIn(logInUserInput);
  }

  @Mutation(() => LogInResponse)
  @Public()
  // @UseGuards(AutoLogInAuthGuard)
  autoLogInUser(
    @Args('autoLogInUserInput') autoLogInUserInput: AutoLogInUserInput,
  ) {
    return this.authService.autoLogIn(autoLogInUserInput);
  }

  @Mutation(() => LogOutResponse)
  @Roles(Role.USER)
  logOutUser(
    @Args('logOutUserInput') logOutUserInput: LogOutUserInput,
  ): Promise<LogOutResponse> {
    return this.authService.logOut(logOutUserInput);
  }

  @Mutation(() => ChangeEmailResponse)
  @Roles(Role.USER)
  changeEmail(@Args('changeEmailInput') changeEmailInput: ChangeEmailInput) {
    return this.authService.changeEmail(changeEmailInput);
  }

  @Mutation(() => ChangePasswordResponse)
  @Roles(Role.USER)
  changePassword(
    @Args('changePasswordInput') changePasswordInput: ChangePasswordInput,
  ) {
    return this.authService.changePassword(changePasswordInput);
  }

  @Mutation(() => ChangeProfilePicResponse)
  @Roles(Role.USER)
  changeProfilePic(
    @Args('changeProfilePicInput') changeProfilePicInput: ChangeProfilePicInput,
  ) {
    return this.authService.changeProfilePic(changeProfilePicInput);
  }

  @Mutation(() => ForgotPasswordResponse)
  @Public()
  forgotPassword(
    @Args('forgotPasswordInput') forgotPasswordInput: ForgotPasswordInput,
  ) {
    return this.authService.forgotPassword(forgotPasswordInput);
  }
}
