import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Chat } from '../chat/chat.model';

@ObjectType()
export class Message {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:false})
    senderId!: string;

    @Field(() => String, {nullable:false})
    chatId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => User, {nullable:false})
    sender?: User;

    @Field(() => Chat, {nullable:false})
    chat?: Chat;
}
