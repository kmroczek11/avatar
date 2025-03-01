import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutMessagesInput } from '../user/user-create-nested-one-without-messages.input';
import { ChatCreateNestedOneWithoutMessagesInput } from '../chat/chat-create-nested-one-without-messages.input';

@InputType()
export class MessageCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutMessagesInput, {nullable:false})
    sender!: UserCreateNestedOneWithoutMessagesInput;

    @Field(() => ChatCreateNestedOneWithoutMessagesInput, {nullable:false})
    chat!: ChatCreateNestedOneWithoutMessagesInput;
}
