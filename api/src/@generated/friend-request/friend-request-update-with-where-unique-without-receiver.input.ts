import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { Type } from 'class-transformer';
import { FriendRequestUpdateWithoutReceiverInput } from './friend-request-update-without-receiver.input';

@InputType()
export class FriendRequestUpdateWithWhereUniqueWithoutReceiverInput {

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    @Type(() => FriendRequestWhereUniqueInput)
    where!: Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'creatorId_receiverId'>;

    @Field(() => FriendRequestUpdateWithoutReceiverInput, {nullable:false})
    @Type(() => FriendRequestUpdateWithoutReceiverInput)
    data!: FriendRequestUpdateWithoutReceiverInput;
}
