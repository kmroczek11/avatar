import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AcceptFriendRequestInput {
  @Field()
  friendRequestId: string;
}
