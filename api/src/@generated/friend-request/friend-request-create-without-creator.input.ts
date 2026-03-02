import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { UserCreateNestedOneWithoutReceivedFriendRequestsInput } from '../user/user-create-nested-one-without-received-friend-requests.input';

@InputType()
export class FriendRequestCreateWithoutCreatorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;

    @Field(() => UserCreateNestedOneWithoutReceivedFriendRequestsInput, {nullable:false})
    receiver!: UserCreateNestedOneWithoutReceivedFriendRequestsInput;
}
