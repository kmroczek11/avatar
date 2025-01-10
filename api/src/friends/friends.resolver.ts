import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FriendRequest } from 'src/@generated/friend-request/friend-request.model';
import { FriendsService } from './friends.service';
import { FriendRequestCreateInput } from 'src/@generated/friend-request/friend-request-create.input';

@Resolver((of) => FriendRequest)
export class FriendsResolver {
  constructor(private friendsService: FriendsService) {}

  @Mutation(() => FriendRequest)
  sendFriendRequest(
    @Args('sendFriendRequestInput') sendFriendRequestInput: FriendRequestCreateInput,
  ): Promise<FriendRequest> {
    return this.friendsService.sendFriendRequest(sendFriendRequestInput);
  }

  @Mutation(() => FriendRequest)
  acceptFriendRequest(
    @Args('acceptFriendRequestInput') acceptFriendRequestInput: AcceptFriendRequestInput,
  ): Promise<FriendRequest> {
    return this.friendsService.acceptFriendRequest(acceptFriendRequestInput);
  }

  @Query(() => [FriendRequest])
  getPendingRequests(@Args('getPendingRequestsInput') getPendingRequestsInput: GetPendingRequestsInput): Promise<FriendRequest[]> {
    return this.friendsService.getPendingRequests(getPendingRequestsInput);
  }

  @Mutation(() => FriendRequest)
  rejectFriendRequest(
    @Args('rejectFriendRequestInput') rejectFriendRequestInput: RejectFriendRequestInput,
  ): Promise<FriendRequest> {
    return this.friendsService.rejectFriendRequest(rejectFriendRequestInput);
  }

  @Mutation(() => FriendRequest)
  cancelFriendRequest(
    @Args('cancelFriendRequestInput') cancelFriendRequestInput: CancelFriendRequestInput,
  ): Promise<FriendRequest> {
    return this.friendsService.cancelFriendRequest(cancelFriendRequestInput);
  }
}
