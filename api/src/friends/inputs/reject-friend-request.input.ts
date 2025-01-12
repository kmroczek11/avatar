import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RejectFriendRequestInput {
  @Field()
  friendRequestId: string;
}
