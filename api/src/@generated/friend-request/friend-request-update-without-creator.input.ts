import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumStatusFieldUpdateOperationsInput } from '../prisma/enum-status-field-update-operations.input';
import { UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput } from '../user/user-update-one-required-without-received-friend-requests-nested.input';

@InputType()
export class FriendRequestUpdateWithoutCreatorInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumStatusFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput, {nullable:true})
    receiver?: UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput;
}
