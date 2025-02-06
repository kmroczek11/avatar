import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    friendRequestsSent?: number;

    @Field(() => Int, {nullable:false})
    friendRequestsReceived?: number;

    @Field(() => Int, {nullable:false})
    friends?: number;

    @Field(() => Int, {nullable:false})
    friendsOf?: number;

    @Field(() => Int, {nullable:false})
    posts?: number;
}
