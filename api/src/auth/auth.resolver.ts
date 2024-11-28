import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LogInResponse } from './responses/logIn-response';
import { RegisterUserInput } from './inputs/register-user.input';
import { Public } from './decorators/public.decorator';
import { LogInUserInput } from './inputs/logIn-user.input';
import { LogInAuthGuard } from './guards/logIn-auth.guard';
import { UseGuards } from '@nestjs/common';
import { AutoLogInGuard } from './guards/autoLogIn-auth.guard';
import { AutoLogInUserInput } from './inputs/autoLogIn-user.input';
import { CurrentUser } from './decorators/user.decorator';
import { User } from 'src/@generated/user/user.model';

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
  @UseGuards(LogInAuthGuard)
  @Public()
  logInUser(
    @Args('logInUserInput') logInUserInput: LogInUserInput,
    @CurrentUser() user: User,
  ): Promise<LogInResponse> {
    return this.authService.logIn(user);
  }

  @Mutation(() => LogInResponse)
  // @UseGuards(AutoLogInGuard)
  @Public()
  autoLogInUser(
    @Args('autoLogInUserInput') autoLogInUserInput: AutoLogInUserInput,
  ) {
    return this.authService.autoLogIn(autoLogInUserInput);
  }
}
