import { Field, InputType } from '@nestjs/graphql';
import { Chat } from 'src/@generated/chat/chat.model';
import { User } from 'src/@generated/user/user.model';

@InputType()
export class CreateMessageInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  text!: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => String, { nullable: false })
  senderId!: string;

  @Field(() => String, { nullable: false })
  chatId!: string;
}
