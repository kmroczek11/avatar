import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { Type } from 'class-transformer';
import { FriendRequestUpdateWithoutRequesterInput } from './friend-request-update-without-requester.input';

@InputType()
export class FriendRequestUpdateWithWhereUniqueWithoutRequesterInput {

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    @Type(() => FriendRequestWhereUniqueInput)
    where!: Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'requesterId_receiverId'>;

    @Field(() => FriendRequestUpdateWithoutRequesterInput, {nullable:false})
    @Type(() => FriendRequestUpdateWithoutRequesterInput)
    data!: FriendRequestUpdateWithoutRequesterInput;
}
