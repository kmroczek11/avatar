import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetChatInput {
  @Field()
  creatorId: string;

  @Field()
  friendId: string;
}
