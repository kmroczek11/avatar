import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class JoinChatInput {
  @Field()
  creatorId: string;

  @Field()
  friendId: string;

  @Field()
  socketId: string;
}
