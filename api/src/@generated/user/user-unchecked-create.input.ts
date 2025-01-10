import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreaterolesInput } from './user-createroles.input';
import { FriendRequestUncheckedCreateNestedManyWithoutRequesterInput } from '../friend-request/friend-request-unchecked-create-nested-many-without-requester.input';
import { FriendRequestUncheckedCreateNestedManyWithoutReceiverInput } from '../friend-request/friend-request-unchecked-create-nested-many-without-receiver.input';

@InputType()
export class UserUncheckedCreateInput {

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

    @Field(() => FriendRequestUncheckedCreateNestedManyWithoutRequesterInput, {nullable:true})
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutRequesterInput;

    @Field(() => FriendRequestUncheckedCreateNestedManyWithoutReceiverInput, {nullable:true})
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput;
}
