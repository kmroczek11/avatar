import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { UserCreateNestedOneWithoutFriendRequestsReceivedInput } from '../user/user-create-nested-one-without-friend-requests-received.input';

@InputType()
export class FriendRequestCreateWithoutRequesterInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;

    @Field(() => UserCreateNestedOneWithoutFriendRequestsReceivedInput, {nullable:false})
    receiver!: UserCreateNestedOneWithoutFriendRequestsReceivedInput;
}
