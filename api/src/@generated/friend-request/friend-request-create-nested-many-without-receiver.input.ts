import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestCreateWithoutReceiverInput } from './friend-request-create-without-receiver.input';
import { Type } from 'class-transformer';
import { FriendRequestCreateOrConnectWithoutReceiverInput } from './friend-request-create-or-connect-without-receiver.input';
import { FriendRequestCreateManyReceiverInputEnvelope } from './friend-request-create-many-receiver-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';

@InputType()
export class FriendRequestCreateNestedManyWithoutReceiverInput {

    @Field(() => [FriendRequestCreateWithoutReceiverInput], {nullable:true})
    @Type(() => FriendRequestCreateWithoutReceiverInput)
    create?: Array<FriendRequestCreateWithoutReceiverInput>;

    @Field(() => [FriendRequestCreateOrConnectWithoutReceiverInput], {nullable:true})
    @Type(() => FriendRequestCreateOrConnectWithoutReceiverInput)
    connectOrCreate?: Array<FriendRequestCreateOrConnectWithoutReceiverInput>;

    @Field(() => FriendRequestCreateManyReceiverInputEnvelope, {nullable:true})
    @Type(() => FriendRequestCreateManyReceiverInputEnvelope)
    createMany?: FriendRequestCreateManyReceiverInputEnvelope;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    @Type(() => FriendRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'creatorId_receiverId'>>;
}
