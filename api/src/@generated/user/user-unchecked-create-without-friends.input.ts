import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreaterolesInput } from './user-createroles.input';
import { FriendRequestUncheckedCreateNestedManyWithoutCreatorInput } from '../friend-request/friend-request-unchecked-create-nested-many-without-creator.input';
import { FriendRequestUncheckedCreateNestedManyWithoutReceiverInput } from '../friend-request/friend-request-unchecked-create-nested-many-without-receiver.input';
import { FriendUncheckedCreateNestedManyWithoutUser2Input } from '../friend/friend-unchecked-create-nested-many-without-user-2.input';
import { PostUncheckedCreateNestedManyWithoutAuthorInput } from '../post/post-unchecked-create-nested-many-without-author.input';

@InputType()
export class UserUncheckedCreateWithoutFriendsInput {

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

    @Field(() => FriendRequestUncheckedCreateNestedManyWithoutCreatorInput, {nullable:true})
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutCreatorInput;

    @Field(() => FriendRequestUncheckedCreateNestedManyWithoutReceiverInput, {nullable:true})
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput;

    @Field(() => FriendUncheckedCreateNestedManyWithoutUser2Input, {nullable:true})
    friendsOf?: FriendUncheckedCreateNestedManyWithoutUser2Input;

    @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
}
