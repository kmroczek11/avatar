import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveChatWhereInput } from './active-chat-where.input';
import { Type } from 'class-transformer';
import { ActiveChatOrderByWithAggregationInput } from './active-chat-order-by-with-aggregation.input';
import { ActiveChatScalarFieldEnum } from './active-chat-scalar-field.enum';
import { ActiveChatScalarWhereWithAggregatesInput } from './active-chat-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ActiveChatCountAggregateInput } from './active-chat-count-aggregate.input';
import { ActiveChatMinAggregateInput } from './active-chat-min-aggregate.input';
import { ActiveChatMaxAggregateInput } from './active-chat-max-aggregate.input';

@ArgsType()
export class ActiveChatGroupByArgs {

    @Field(() => ActiveChatWhereInput, {nullable:true})
    @Type(() => ActiveChatWhereInput)
    where?: ActiveChatWhereInput;

    @Field(() => [ActiveChatOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ActiveChatOrderByWithAggregationInput>;

    @Field(() => [ActiveChatScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ActiveChatScalarFieldEnum>;

    @Field(() => ActiveChatScalarWhereWithAggregatesInput, {nullable:true})
    having?: ActiveChatScalarWhereWithAggregatesInput;

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
