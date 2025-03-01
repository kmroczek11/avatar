import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ActiveChatCountAggregate } from './active-chat-count-aggregate.output';
import { ActiveChatMinAggregate } from './active-chat-min-aggregate.output';
import { ActiveChatMaxAggregate } from './active-chat-max-aggregate.output';

@ObjectType()
export class ActiveChatGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    chatId!: string;

    @Field(() => String, {nullable:false})
    socketId!: string;

    @Field(() => ActiveChatCountAggregate, {nullable:true})
    _count?: ActiveChatCountAggregate;

    @Field(() => ActiveChatMinAggregate, {nullable:true})
    _min?: ActiveChatMinAggregate;

    @Field(() => ActiveChatMaxAggregate, {nullable:true})
    _max?: ActiveChatMaxAggregate;
}
