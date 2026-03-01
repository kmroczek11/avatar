import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFriendRequestsSentInput } from './user-update-without-friend-requests-sent.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutFriendRequestsSentInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutFriendRequestsSentInput, {nullable:false})
    @Type(() => UserUpdateWithoutFriendRequestsSentInput)
    data!: UserUpdateWithoutFriendRequestsSentInput;
}
