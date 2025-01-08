import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { Type } from 'class-transformer';
import { FriendRequestUpdateWithoutReceiverInput } from './friend-request-update-without-receiver.input';
import { FriendRequestCreateWithoutReceiverInput } from './friend-request-create-without-receiver.input';

@InputType()
export class FriendRequestUpsertWithWhereUniqueWithoutReceiverInput {

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    @Type(() => FriendRequestWhereUniqueInput)
    where!: Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'creatorId_receiverId'>;

    @Field(() => FriendRequestUpdateWithoutReceiverInput, {nullable:false})
    @Type(() => FriendRequestUpdateWithoutReceiverInput)
    update!: FriendRequestUpdateWithoutReceiverInput;

    @Field(() => FriendRequestCreateWithoutReceiverInput, {nullable:false})
    @Type(() => FriendRequestCreateWithoutReceiverInput)
    create!: FriendRequestCreateWithoutReceiverInput;
}
