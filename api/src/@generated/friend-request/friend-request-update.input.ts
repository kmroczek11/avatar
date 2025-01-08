import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumStatusFieldUpdateOperationsInput } from '../prisma/enum-status-field-update-operations.input';
import { UserUpdateOneRequiredWithoutFriendRequestsSentNestedInput } from '../user/user-update-one-required-without-friend-requests-sent-nested.input';
import { UserUpdateOneRequiredWithoutFriendRequestsReceivedNestedInput } from '../user/user-update-one-required-without-friend-requests-received-nested.input';

@InputType()
export class FriendRequestUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumStatusFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutFriendRequestsSentNestedInput, {nullable:true})
    creator?: UserUpdateOneRequiredWithoutFriendRequestsSentNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutFriendRequestsReceivedNestedInput, {nullable:true})
    receiver?: UserUpdateOneRequiredWithoutFriendRequestsReceivedNestedInput;
}
