import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumRoleNullableListFilter } from '../prisma/enum-role-nullable-list-filter.input';
import { FriendRequestListRelationFilter } from '../friend-request/friend-request-list-relation-filter.input';
import { FriendListRelationFilter } from '../friend/friend-list-relation-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { ChatListRelationFilter } from '../chat/chat-list-relation-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

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

    @Field(() => ChatListRelationFilter, {nullable:true})
    chats?: ChatListRelationFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    messages?: MessageListRelationFilter;
}
