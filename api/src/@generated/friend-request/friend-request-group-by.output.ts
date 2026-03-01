import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { FriendRequestCountAggregate } from './friend-request-count-aggregate.output';
import { FriendRequestMinAggregate } from './friend-request-min-aggregate.output';
import { FriendRequestMaxAggregate } from './friend-request-max-aggregate.output';

@ObjectType()
export class FriendRequestGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    creatorId!: string;

    @Field(() => String, {nullable:false})
    receiverId!: string;

    @Field(() => Status, {nullable:false})
    status!: keyof typeof Status;

    @Field(() => FriendRequestCountAggregate, {nullable:true})
    _count?: FriendRequestCountAggregate;

    @Field(() => FriendRequestMinAggregate, {nullable:true})
    _min?: FriendRequestMinAggregate;

    @Field(() => FriendRequestMaxAggregate, {nullable:true})
    _max?: FriendRequestMaxAggregate;
}
