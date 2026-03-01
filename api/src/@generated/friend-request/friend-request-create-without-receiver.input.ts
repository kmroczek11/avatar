import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { UserCreateNestedOneWithoutSentFriendRequestsInput } from '../user/user-create-nested-one-without-sent-friend-requests.input';

@InputType()
export class FriendRequestCreateWithoutReceiverInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;

    @Field(() => UserCreateNestedOneWithoutSentFriendRequestsInput, {nullable:false})
    creator!: UserCreateNestedOneWithoutSentFriendRequestsInput;
}
