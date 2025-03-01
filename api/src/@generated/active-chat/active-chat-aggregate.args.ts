import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveChatWhereInput } from './active-chat-where.input';
import { Type } from 'class-transformer';
import { ActiveChatOrderByWithRelationInput } from './active-chat-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ActiveChatWhereUniqueInput } from './active-chat-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActiveChatCountAggregateInput } from './active-chat-count-aggregate.input';
import { ActiveChatMinAggregateInput } from './active-chat-min-aggregate.input';
import { ActiveChatMaxAggregateInput } from './active-chat-max-aggregate.input';

@ArgsType()
export class ActiveChatAggregateArgs {

    @Field(() => ActiveChatWhereInput, {nullable:true})
    @Type(() => ActiveChatWhereInput)
    where?: ActiveChatWhereInput;

    @Field(() => [ActiveChatOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ActiveChatOrderByWithRelationInput>;

    @Field(() => ActiveChatWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ActiveChatWhereUniqueInput, 'id' | 'userId' | 'socketId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ActiveChatCountAggregateInput, {nullable:true})
    _count?: ActiveChatCountAggregateInput;

    @Field(() => ActiveChatMinAggregateInput, {nullable:true})
    _min?: ActiveChatMinAggregateInput;

    @Field(() => ActiveChatMaxAggregateInput, {nullable:true})
    _max?: ActiveChatMaxAggregateInput;
}
