import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ActiveChatMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    chatId?: string;

    @Field(() => String, {nullable:true})
    socketId?: string;
}
