import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumStatusFieldUpdateOperationsInput } from '../prisma/enum-status-field-update-operations.input';
import { UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput } from '../user/user-update-one-required-without-sent-friend-requests-nested.input';

@InputType()
export class FriendRequestUpdateWithoutReceiverInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumStatusFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput, {nullable:true})
    creator?: UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput;
}
