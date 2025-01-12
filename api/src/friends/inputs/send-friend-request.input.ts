import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SendFriendRequestInput {
  @Field()
  creatorId: string;
  
  @Field()
  receiverId: string;
}
