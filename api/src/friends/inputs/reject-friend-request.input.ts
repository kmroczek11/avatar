import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RejectFriendRequestInput {
  @Field()
  creatorId: string;
  
  @Field()
  receiverId: string;
}
