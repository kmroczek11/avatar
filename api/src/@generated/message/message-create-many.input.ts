import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MessageCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:false})
    senderId!: string;

    @Field(() => String, {nullable:false})
    chatId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
