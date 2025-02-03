import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class FriendWhereInput {

    @Field(() => [FriendWhereInput], {nullable:true})
    AND?: Array<FriendWhereInput>;

    @Field(() => [FriendWhereInput], {nullable:true})
    OR?: Array<FriendWhereInput>;

    @Field(() => [FriendWhereInput], {nullable:true})
    NOT?: Array<FriendWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId1?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId2?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user1?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user2?: UserRelationFilter;
}
