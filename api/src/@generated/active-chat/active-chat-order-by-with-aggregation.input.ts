import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ActiveChatCountOrderByAggregateInput } from './active-chat-count-order-by-aggregate.input';
import { ActiveChatMaxOrderByAggregateInput } from './active-chat-max-order-by-aggregate.input';
import { ActiveChatMinOrderByAggregateInput } from './active-chat-min-order-by-aggregate.input';

@InputType()
export class ActiveChatOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chatId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    socketId?: keyof typeof SortOrder;

    @Field(() => ActiveChatCountOrderByAggregateInput, {nullable:true})
    _count?: ActiveChatCountOrderByAggregateInput;

    @Field(() => ActiveChatMaxOrderByAggregateInput, {nullable:true})
    _max?: ActiveChatMaxOrderByAggregateInput;

    @Field(() => ActiveChatMinOrderByAggregateInput, {nullable:true})
    _min?: ActiveChatMinOrderByAggregateInput;
}
