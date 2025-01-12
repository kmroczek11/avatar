import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreaterolesInput } from './user-createroles.input';
import { FriendRequestUncheckedCreateNestedManyWithoutCreatorInput } from '../friend-request/friend-request-unchecked-create-nested-many-without-creator.input';

@InputType()
export class UserUncheckedCreateWithoutFriendRequestsReceivedInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => String, {nullable:true})
    imgSrc?: string;

    @Field(() => UserCreaterolesInput, {nullable:true})
    roles?: UserCreaterolesInput;

    @Field(() => FriendRequestUncheckedCreateNestedManyWithoutCreatorInput, {nullable:true})
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutCreatorInput;
}
