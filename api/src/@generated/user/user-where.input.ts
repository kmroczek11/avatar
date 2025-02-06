import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumRoleNullableListFilter } from '../prisma/enum-role-nullable-list-filter.input';
import { FriendRequestListRelationFilter } from '../friend-request/friend-request-list-relation-filter.input';
import { FriendListRelationFilter } from '../friend/friend-list-relation-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imgSrc?: StringNullableFilter;

    @Field(() => EnumRoleNullableListFilter, {nullable:true})
    roles?: EnumRoleNullableListFilter;

    @Field(() => FriendRequestListRelationFilter, {nullable:true})
    friendRequestsSent?: FriendRequestListRelationFilter;

    @Field(() => FriendRequestListRelationFilter, {nullable:true})
    friendRequestsReceived?: FriendRequestListRelationFilter;

    @Field(() => FriendListRelationFilter, {nullable:true})
    friends?: FriendListRelationFilter;

    @Field(() => FriendListRelationFilter, {nullable:true})
    friendsOf?: FriendListRelationFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: PostListRelationFilter;
}
