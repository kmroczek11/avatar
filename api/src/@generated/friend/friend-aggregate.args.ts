import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendWhereInput } from './friend-where.input';
import { Type } from 'class-transformer';
import { FriendOrderByWithRelationInput } from './friend-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FriendWhereUniqueInput } from './friend-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FriendCountAggregateInput } from './friend-count-aggregate.input';
import { FriendMinAggregateInput } from './friend-min-aggregate.input';
import { FriendMaxAggregateInput } from './friend-max-aggregate.input';

@ArgsType()
export class FriendAggregateArgs {

    @Field(() => FriendWhereInput, {nullable:true})
    @Type(() => FriendWhereInput)
    where?: FriendWhereInput;

    @Field(() => [FriendOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FriendOrderByWithRelationInput>;

    @Field(() => FriendWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FriendWhereUniqueInput, 'id' | 'userId1_userId2'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FriendCountAggregateInput, {nullable:true})
    _count?: FriendCountAggregateInput;

    @Field(() => FriendMinAggregateInput, {nullable:true})
    _min?: FriendMinAggregateInput;

    @Field(() => FriendMaxAggregateInput, {nullable:true})
    _max?: FriendMaxAggregateInput;
}
