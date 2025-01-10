import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { UserCreateNestedOneWithoutFriendRequestsSentInput } from '../user/user-create-nested-one-without-friend-requests-sent.input';

@InputType()
export class FriendRequestCreateWithoutReceiverInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;

    @Field(() => UserCreateNestedOneWithoutFriendRequestsSentInput, {nullable:false})
    requester!: UserCreateNestedOneWithoutFriendRequestsSentInput;
}
