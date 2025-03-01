import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { FriendRequest } from '../friend-request/friend-request.model';
import { Friend } from '../friend/friend.model';
import { Post } from '../post/post.model';
import { Chat } from '../chat/chat.model';
import { Message } from '../message/message.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => String, {nullable:true})
    imgSrc!: string | null;

    @Field(() => [Role], {nullable:true})
    roles!: Array<keyof typeof Role>;

    @Field(() => [FriendRequest], {nullable:true})
    friendRequestsSent?: Array<FriendRequest>;

    @Field(() => [FriendRequest], {nullable:true})
    friendRequestsReceived?: Array<FriendRequest>;

    @Field(() => [Friend], {nullable:true})
    friends?: Array<Friend>;

    @Field(() => [Friend], {nullable:true})
    friendsOf?: Array<Friend>;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => [Chat], {nullable:true})
    chats?: Array<Chat>;

    @Field(() => [Message], {nullable:true})
    messages?: Array<Message>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
