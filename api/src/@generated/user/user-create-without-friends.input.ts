import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreaterolesInput } from './user-createroles.input';
import { FriendRequestCreateNestedManyWithoutCreatorInput } from '../friend-request/friend-request-create-nested-many-without-creator.input';
import { FriendRequestCreateNestedManyWithoutReceiverInput } from '../friend-request/friend-request-create-nested-many-without-receiver.input';
import { FriendCreateNestedManyWithoutUser2Input } from '../friend/friend-create-nested-many-without-user-2.input';
import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';
import { ChatCreateNestedManyWithoutUsersInput } from '../chat/chat-create-nested-many-without-users.input';
import { MessageCreateNestedManyWithoutSenderInput } from '../message/message-create-nested-many-without-sender.input';

@InputType()
export class UserCreateWithoutFriendsInput {

    @Field(() => String, {nullable:true})
    id?: string;

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
    imgSrc?: string;

    @Field(() => UserCreaterolesInput, {nullable:true})
    roles?: UserCreaterolesInput;

    @Field(() => FriendRequestCreateNestedManyWithoutCreatorInput, {nullable:true})
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutCreatorInput;

    @Field(() => FriendRequestCreateNestedManyWithoutReceiverInput, {nullable:true})
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutReceiverInput;

    @Field(() => FriendCreateNestedManyWithoutUser2Input, {nullable:true})
    friendsOf?: FriendCreateNestedManyWithoutUser2Input;

    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: PostCreateNestedManyWithoutAuthorInput;

    @Field(() => ChatCreateNestedManyWithoutUsersInput, {nullable:true})
    chats?: ChatCreateNestedManyWithoutUsersInput;

    @Field(() => MessageCreateNestedManyWithoutSenderInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutSenderInput;
}
