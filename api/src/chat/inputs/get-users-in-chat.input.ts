import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetUsersInChatInput {
  @Field()
  chatId: string
}
