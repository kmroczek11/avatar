import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MessageMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => String, {nullable:true})
    senderId?: string;

    @Field(() => String, {nullable:true})
    chatId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
