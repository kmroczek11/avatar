import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { Type } from 'class-transformer';
import { FriendRequestCreateWithoutReceiverInput } from './friend-request-create-without-receiver.input';

@InputType()
export class FriendRequestCreateOrConnectWithoutReceiverInput {

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    @Type(() => FriendRequestWhereUniqueInput)
    where!: Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'creatorId_receiverId'>;

    @Field(() => FriendRequestCreateWithoutReceiverInput, {nullable:false})
    @Type(() => FriendRequestCreateWithoutReceiverInput)
    create!: FriendRequestCreateWithoutReceiverInput;
}
