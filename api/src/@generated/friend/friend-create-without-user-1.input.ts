import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFriendsOfInput } from '../user/user-create-nested-one-without-friends-of.input';

@InputType()
export class FriendCreateWithoutUser1Input {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutFriendsOfInput, {nullable:false})
    user2!: UserCreateNestedOneWithoutFriendsOfInput;
}
