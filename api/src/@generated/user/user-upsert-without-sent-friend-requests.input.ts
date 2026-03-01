import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSentFriendRequestsInput } from './user-update-without-sent-friend-requests.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSentFriendRequestsInput } from './user-create-without-sent-friend-requests.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutSentFriendRequestsInput {

    @Field(() => UserUpdateWithoutSentFriendRequestsInput, {nullable:false})
    @Type(() => UserUpdateWithoutSentFriendRequestsInput)
    update!: UserUpdateWithoutSentFriendRequestsInput;

    @Field(() => UserCreateWithoutSentFriendRequestsInput, {nullable:false})
    @Type(() => UserCreateWithoutSentFriendRequestsInput)
    create!: UserCreateWithoutSentFriendRequestsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
