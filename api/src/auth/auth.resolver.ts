import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LogInResponse } from './responses/logIn-response';
import { RegisterUserInput } from './inputs/register-user.input';
import { Public } from './decorators/public.decorator';
import { LogInUserInput } from './inputs/logIn-user.input';
import { LogInAuthGuard } from './guards/logIn-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LogInResponse)
  @Public()
  registerUser(
    @Args('registerUserInput') registerUserInput: RegisterUserInput,
  ): Promise<void> {
    return this.authService.register(registerUserInput);
  }

  @Mutation(() => LogInResponse)
  @UseGuards(LogInAuthGuard)
  @Public()
  logInUser(
    @Args('logInUserInput') logInUserInput: LogInUserInput,
    @Context() context,
  ): Promise<void> {
    return this.authService.logIn(context.user);
  }
}
