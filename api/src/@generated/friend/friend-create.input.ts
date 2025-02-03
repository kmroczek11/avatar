import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFriendsInput } from '../user/user-create-nested-one-without-friends.input';
import { UserCreateNestedOneWithoutFriendsOfInput } from '../user/user-create-nested-one-without-friends-of.input';

@InputType()
export class FriendCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutFriendsInput, {nullable:false})
    user1!: UserCreateNestedOneWithoutFriendsInput;

    @Field(() => UserCreateNestedOneWithoutFriendsOfInput, {nullable:false})
    user2!: UserCreateNestedOneWithoutFriendsOfInput;
}
