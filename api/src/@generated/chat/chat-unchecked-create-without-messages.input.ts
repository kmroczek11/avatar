import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutChatsInput } from '../user/user-unchecked-create-nested-many-without-chats.input';

@InputType()
export class ChatUncheckedCreateWithoutMessagesInput {

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
}
