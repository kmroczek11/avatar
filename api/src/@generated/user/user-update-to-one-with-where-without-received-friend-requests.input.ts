import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutReceivedFriendRequestsInput } from './user-update-without-received-friend-requests.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutReceivedFriendRequestsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutReceivedFriendRequestsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReceivedFriendRequestsInput)
    data!: UserUpdateWithoutReceivedFriendRequestsInput;
}
