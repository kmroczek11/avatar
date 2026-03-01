import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFriendsInput } from '../user/user-create-nested-one-without-friends.input';

@InputType()
export class FriendCreateWithoutUser2Input {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutFriendsInput, {nullable:false})
    user1!: UserCreateNestedOneWithoutFriendsInput;
}
