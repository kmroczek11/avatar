import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdaterolesInput } from './user-updateroles.input';
import { FriendRequestUpdateManyWithoutCreatorNestedInput } from '../friend-request/friend-request-update-many-without-creator-nested.input';
import { FriendRequestUpdateManyWithoutReceiverNestedInput } from '../friend-request/friend-request-update-many-without-receiver-nested.input';
import { FriendUpdateManyWithoutUser1NestedInput } from '../friend/friend-update-many-without-user-1-nested.input';

@InputType()
export class UserUpdateWithoutFriendsOfInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    imgSrc?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdaterolesInput, {nullable:true})
    roles?: UserUpdaterolesInput;

    @Field(() => FriendRequestUpdateManyWithoutCreatorNestedInput, {nullable:true})
    friendRequestsSent?: FriendRequestUpdateManyWithoutCreatorNestedInput;

    @Field(() => FriendRequestUpdateManyWithoutReceiverNestedInput, {nullable:true})
    friendRequestsReceived?: FriendRequestUpdateManyWithoutReceiverNestedInput;

    @Field(() => FriendUpdateManyWithoutUser1NestedInput, {nullable:true})
    friends?: FriendUpdateManyWithoutUser1NestedInput;
}
