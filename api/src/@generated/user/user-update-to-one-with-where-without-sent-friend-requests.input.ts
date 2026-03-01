import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutSentFriendRequestsInput } from './user-update-without-sent-friend-requests.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutSentFriendRequestsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutSentFriendRequestsInput, {nullable:false})
    @Type(() => UserUpdateWithoutSentFriendRequestsInput)
    data!: UserUpdateWithoutSentFriendRequestsInput;
}
