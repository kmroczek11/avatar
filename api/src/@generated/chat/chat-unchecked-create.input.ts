import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutChatsInput } from '../user/user-unchecked-create-nested-many-without-chats.input';
import { MessageUncheckedCreateNestedManyWithoutChatInput } from '../message/message-unchecked-create-nested-many-without-chat.input';

@InputType()
export class ChatUncheckedCreateInput {

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

    @Field(() => UserUncheckedCreateNestedManyWithoutChatsInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutChatsInput;

    @Field(() => MessageUncheckedCreateNestedManyWithoutChatInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput;
}
