import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CancelFriendRequestInput {
  @Field()
  friendRequestId: string;
}
