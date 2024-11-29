import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LogInResponse } from './responses/logIn-response';
import { RegisterUserInput } from './inputs/register-user.input';
import { Public } from './decorators/public.decorator';
import { LogInUserInput } from './inputs/logIn-user.input';
import { LogInAuthGuard } from './guards/logIn-auth.guard';
import { UseGuards } from '@nestjs/common';
import { AutoLogInAuthGuard } from './guards/autoLogIn-auth.guard';
import { AutoLogInUserInput } from './inputs/autoLogIn-user.input';
import { CurrentUser } from './decorators/user.decorator';
import { User } from 'src/@generated/user/user.model';
import { LogOutResponse } from './responses/logOut-response';
import { Roles } from './decorators/roles.decorator';
import { Role } from 'src/@generated/prisma/role.enum';
import { LogOutUserInput } from './inputs/logOut-user.input';

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
  @UseGuards(AutoLogInAuthGuard)
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
}
