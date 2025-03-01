import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetUserChatsInput {
  @Field()
  userId: string
}
