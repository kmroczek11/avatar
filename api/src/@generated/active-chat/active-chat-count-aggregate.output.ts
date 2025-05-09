import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ActiveChatCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    chatId!: number;

    @Field(() => Int, {nullable:false})
    socketId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
