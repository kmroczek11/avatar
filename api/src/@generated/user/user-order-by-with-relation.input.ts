import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FriendRequestOrderByRelationAggregateInput } from '../friend-request/friend-request-order-by-relation-aggregate.input';
import { FriendOrderByRelationAggregateInput } from '../friend/friend-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    imgSrc?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    roles?: keyof typeof SortOrder;

    @Field(() => FriendRequestOrderByRelationAggregateInput, {nullable:true})
    friendRequestsSent?: FriendRequestOrderByRelationAggregateInput;

    @Field(() => FriendRequestOrderByRelationAggregateInput, {nullable:true})
    friendRequestsReceived?: FriendRequestOrderByRelationAggregateInput;

    @Field(() => FriendOrderByRelationAggregateInput, {nullable:true})
    friends?: FriendOrderByRelationAggregateInput;

    @Field(() => FriendOrderByRelationAggregateInput, {nullable:true})
    friendsOf?: FriendOrderByRelationAggregateInput;
}
