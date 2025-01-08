import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SendFriendRequestInput {
  @Field()
  receiverId: string;

  @Field()
  creatorId: string;
}
