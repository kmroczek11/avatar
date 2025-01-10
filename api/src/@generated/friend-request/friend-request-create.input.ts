import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { UserCreateNestedOneWithoutFriendRequestsSentInput } from '../user/user-create-nested-one-without-friend-requests-sent.input';
import { UserCreateNestedOneWithoutFriendRequestsReceivedInput } from '../user/user-create-nested-one-without-friend-requests-received.input';

@InputType()
export class FriendRequestCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;

    @Field(() => UserCreateNestedOneWithoutFriendRequestsSentInput, {nullable:false})
    requester!: UserCreateNestedOneWithoutFriendRequestsSentInput;

    @Field(() => UserCreateNestedOneWithoutFriendRequestsReceivedInput, {nullable:false})
    receiver!: UserCreateNestedOneWithoutFriendRequestsReceivedInput;
}
