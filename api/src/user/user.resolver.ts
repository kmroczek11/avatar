import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from 'src/@generated/user/user.model';
import { UserCreateInput } from 'src/@generated/user/user-create.input';
import { FindByNameInput } from './inputs/find-by-name.input';
import { UserWithFriendRequestStatus } from './models/user-with-friend-request-status';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) { }

  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: UserCreateInput,
  ): Promise<User> {
    return this.userService.createUser(createUserInput);
  }

  @Query(() => User)
  findOne(@Args('email') email: string): Promise<User> {
    return this.userService.findOneByEmail(email);
  }

  @Query(() => [UserWithFriendRequestStatus])
  findUsersByName(@Args('findByNameInput') findByNameInput: FindByNameInput) {
    return this.userService.findByName(findByNameInput);
  }
}
