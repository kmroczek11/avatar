import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreaterolesInput } from './user-createroles.input';
import { FriendRequestUncheckedCreateNestedManyWithoutReceiverInput } from '../friend-request/friend-request-unchecked-create-nested-many-without-receiver.input';
import { FriendUncheckedCreateNestedManyWithoutUser1Input } from '../friend/friend-unchecked-create-nested-many-without-user-1.input';
import { FriendUncheckedCreateNestedManyWithoutUser2Input } from '../friend/friend-unchecked-create-nested-many-without-user-2.input';

@InputType()
export class UserUncheckedCreateWithoutFriendRequestsSentInput {

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

    @Field(() => FriendRequestUncheckedCreateNestedManyWithoutReceiverInput, {nullable:true})
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput;

    @Field(() => FriendUncheckedCreateNestedManyWithoutUser1Input, {nullable:true})
    friends?: FriendUncheckedCreateNestedManyWithoutUser1Input;

    @Field(() => FriendUncheckedCreateNestedManyWithoutUser2Input, {nullable:true})
    friendsOf?: FriendUncheckedCreateNestedManyWithoutUser2Input;
}
