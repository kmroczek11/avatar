import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFriendRequestsSentInput } from './user-update-without-friend-requests-sent.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFriendRequestsSentInput } from './user-create-without-friend-requests-sent.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFriendRequestsSentInput {

    @Field(() => UserUpdateWithoutFriendRequestsSentInput, {nullable:false})
    @Type(() => UserUpdateWithoutFriendRequestsSentInput)
    update!: UserUpdateWithoutFriendRequestsSentInput;

    @Field(() => UserCreateWithoutFriendRequestsSentInput, {nullable:false})
    @Type(() => UserCreateWithoutFriendRequestsSentInput)
    create!: UserCreateWithoutFriendRequestsSentInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
