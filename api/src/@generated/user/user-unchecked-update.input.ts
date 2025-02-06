import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdaterolesInput } from './user-updateroles.input';
import { FriendRequestUncheckedUpdateManyWithoutCreatorNestedInput } from '../friend-request/friend-request-unchecked-update-many-without-creator-nested.input';
import { FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput } from '../friend-request/friend-request-unchecked-update-many-without-receiver-nested.input';
import { FriendUncheckedUpdateManyWithoutUser1NestedInput } from '../friend/friend-unchecked-update-many-without-user-1-nested.input';
import { FriendUncheckedUpdateManyWithoutUser2NestedInput } from '../friend/friend-unchecked-update-many-without-user-2-nested.input';
import { PostUncheckedUpdateManyWithoutAuthorNestedInput } from '../post/post-unchecked-update-many-without-author-nested.input';

@InputType()
export class UserUncheckedUpdateInput {

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

    @Field(() => FriendRequestUncheckedUpdateManyWithoutCreatorNestedInput, {nullable:true})
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutCreatorNestedInput;

    @Field(() => FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput, {nullable:true})
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput;

    @Field(() => FriendUncheckedUpdateManyWithoutUser1NestedInput, {nullable:true})
    friends?: FriendUncheckedUpdateManyWithoutUser1NestedInput;

    @Field(() => FriendUncheckedUpdateManyWithoutUser2NestedInput, {nullable:true})
    friendsOf?: FriendUncheckedUpdateManyWithoutUser2NestedInput;

    @Field(() => PostUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
}
