import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ActiveChatUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    chatId!: string;

    @Field(() => String, {nullable:false})
    socketId!: string;
}
