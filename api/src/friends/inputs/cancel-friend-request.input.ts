import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CancelFriendRequestInput {
  @Field()
  creatorId: string;
  
  @Field()
  receiverId: string;
}
