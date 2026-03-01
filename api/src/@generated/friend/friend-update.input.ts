import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutFriendsNestedInput } from '../user/user-update-one-required-without-friends-nested.input';
import { UserUpdateOneRequiredWithoutFriendsOfNestedInput } from '../user/user-update-one-required-without-friends-of-nested.input';

@InputType()
export class FriendUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutFriendsNestedInput, {nullable:true})
    user1?: UserUpdateOneRequiredWithoutFriendsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutFriendsOfNestedInput, {nullable:true})
    user2?: UserUpdateOneRequiredWithoutFriendsOfNestedInput;
}
