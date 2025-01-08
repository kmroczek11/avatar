import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFriendRequestsReceivedInput } from './user-update-without-friend-requests-received.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutFriendRequestsReceivedInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutFriendRequestsReceivedInput, {nullable:false})
    @Type(() => UserUpdateWithoutFriendRequestsReceivedInput)
    data!: UserUpdateWithoutFriendRequestsReceivedInput;
}
