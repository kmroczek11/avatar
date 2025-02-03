import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutFriendsNestedInput } from '../user/user-update-one-required-without-friends-nested.input';

@InputType()
export class FriendUpdateWithoutUser2Input {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutFriendsNestedInput, {nullable:true})
    user1?: UserUpdateOneRequiredWithoutFriendsNestedInput;
}
