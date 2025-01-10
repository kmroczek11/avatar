import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { Type } from 'class-transformer';
import { FriendRequestCreateWithoutRequesterInput } from './friend-request-create-without-requester.input';

@InputType()
export class FriendRequestCreateOrConnectWithoutRequesterInput {

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    @Type(() => FriendRequestWhereUniqueInput)
    where!: Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'requesterId_receiverId'>;

    @Field(() => FriendRequestCreateWithoutRequesterInput, {nullable:false})
    @Type(() => FriendRequestCreateWithoutRequesterInput)
    create!: FriendRequestCreateWithoutRequesterInput;
}
