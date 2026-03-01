import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LeaveChatInput {
  @Field()
  chatId: string;

  @Field()
  socketId: string;
}
