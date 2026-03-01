import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutFriendsOfNestedInput } from '../user/user-update-one-required-without-friends-of-nested.input';

@InputType()
export class FriendUpdateWithoutUser1Input {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutFriendsOfNestedInput, {nullable:true})
    user2?: UserUpdateOneRequiredWithoutFriendsOfNestedInput;
}
