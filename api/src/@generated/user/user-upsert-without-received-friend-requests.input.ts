import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReceivedFriendRequestsInput } from './user-update-without-received-friend-requests.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReceivedFriendRequestsInput } from './user-create-without-received-friend-requests.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutReceivedFriendRequestsInput {

    @Field(() => UserUpdateWithoutReceivedFriendRequestsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReceivedFriendRequestsInput)
    update!: UserUpdateWithoutReceivedFriendRequestsInput;

    @Field(() => UserCreateWithoutReceivedFriendRequestsInput, {nullable:false})
    @Type(() => UserCreateWithoutReceivedFriendRequestsInput)
    create!: UserCreateWithoutReceivedFriendRequestsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
