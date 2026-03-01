import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageUncheckedCreateNestedManyWithoutChatInput } from '../message/message-unchecked-create-nested-many-without-chat.input';

@InputType()
export class ChatUncheckedCreateWithoutUsersInput {

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

    @Field(() => MessageUncheckedCreateNestedManyWithoutChatInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput;
}
