import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFriendRequestsReceivedInput } from './user-update-without-friend-requests-received.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFriendRequestsReceivedInput } from './user-create-without-friend-requests-received.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFriendRequestsReceivedInput {

    @Field(() => UserUpdateWithoutFriendRequestsReceivedInput, {nullable:false})
    @Type(() => UserUpdateWithoutFriendRequestsReceivedInput)
    update!: UserUpdateWithoutFriendRequestsReceivedInput;

    @Field(() => UserCreateWithoutFriendRequestsReceivedInput, {nullable:false})
    @Type(() => UserCreateWithoutFriendRequestsReceivedInput)
    create!: UserCreateWithoutFriendRequestsReceivedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
