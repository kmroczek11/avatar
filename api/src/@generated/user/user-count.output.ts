import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    sentFriendRequests?: number;

    @Field(() => Int, {nullable:false})
    receivedFriendRequests?: number;

    @Field(() => Int, {nullable:false})
    friends?: number;

    @Field(() => Int, {nullable:false})
    friendsOf?: number;

    @Field(() => Int, {nullable:false})
    posts?: number;

    @Field(() => Int, {nullable:false})
    chats?: number;

    @Field(() => Int, {nullable:false})
    messages?: number;
}
