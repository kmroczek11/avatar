import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutChatsInput } from '../user/user-create-nested-many-without-chats.input';
import { MessageCreateNestedManyWithoutChatInput } from '../message/message-create-nested-many-without-chat.input';

@InputType()
export class ChatCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Boolean, {nullable:true})
    isGroup?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutChatsInput, {nullable:true})
    users?: UserCreateNestedManyWithoutChatsInput;

    @Field(() => MessageCreateNestedManyWithoutChatInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutChatInput;
}
