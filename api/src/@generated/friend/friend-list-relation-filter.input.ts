import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendWhereInput } from './friend-where.input';

@InputType()
export class FriendListRelationFilter {

    @Field(() => FriendWhereInput, {nullable:true})
    every?: FriendWhereInput;

    @Field(() => FriendWhereInput, {nullable:true})
    some?: FriendWhereInput;

    @Field(() => FriendWhereInput, {nullable:true})
    none?: FriendWhereInput;
}
