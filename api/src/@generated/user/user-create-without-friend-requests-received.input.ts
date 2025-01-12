import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreaterolesInput } from './user-createroles.input';
import { FriendRequestCreateNestedManyWithoutCreatorInput } from '../friend-request/friend-request-create-nested-many-without-creator.input';

@InputType()
export class UserCreateWithoutFriendRequestsReceivedInput {

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

    @Field(() => FriendRequestCreateNestedManyWithoutCreatorInput, {nullable:true})
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutCreatorInput;
}
