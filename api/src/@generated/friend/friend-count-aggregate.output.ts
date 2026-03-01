import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FriendCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId1!: number;

    @Field(() => Int, {nullable:false})
    userId2!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
