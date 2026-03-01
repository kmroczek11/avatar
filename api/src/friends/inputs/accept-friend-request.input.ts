import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AcceptFriendRequestInput {
  @Field()
  creatorId: string;
  
  @Field()
  receiverId: string;
}
