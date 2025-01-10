import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestCreateWithoutReceiverInput } from './friend-request-create-without-receiver.input';
import { Type } from 'class-transformer';
import { FriendRequestCreateOrConnectWithoutReceiverInput } from './friend-request-create-or-connect-without-receiver.input';
import { FriendRequestUpsertWithWhereUniqueWithoutReceiverInput } from './friend-request-upsert-with-where-unique-without-receiver.input';
import { FriendRequestCreateManyReceiverInputEnvelope } from './friend-request-create-many-receiver-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { FriendRequestUpdateWithWhereUniqueWithoutReceiverInput } from './friend-request-update-with-where-unique-without-receiver.input';
import { FriendRequestUpdateManyWithWhereWithoutReceiverInput } from './friend-request-update-many-with-where-without-receiver.input';
import { FriendRequestScalarWhereInput } from './friend-request-scalar-where.input';

@InputType()
export class FriendRequestUpdateManyWithoutReceiverNestedInput {

    @Field(() => [FriendRequestCreateWithoutReceiverInput], {nullable:true})
    @Type(() => FriendRequestCreateWithoutReceiverInput)
    create?: Array<FriendRequestCreateWithoutReceiverInput>;

    @Field(() => [FriendRequestCreateOrConnectWithoutReceiverInput], {nullable:true})
    @Type(() => FriendRequestCreateOrConnectWithoutReceiverInput)
    connectOrCreate?: Array<FriendRequestCreateOrConnectWithoutReceiverInput>;

    @Field(() => [FriendRequestUpsertWithWhereUniqueWithoutReceiverInput], {nullable:true})
    @Type(() => FriendRequestUpsertWithWhereUniqueWithoutReceiverInput)
    upsert?: Array<FriendRequestUpsertWithWhereUniqueWithoutReceiverInput>;

    @Field(() => FriendRequestCreateManyReceiverInputEnvelope, {nullable:true})
    @Type(() => FriendRequestCreateManyReceiverInputEnvelope)
    createMany?: FriendRequestCreateManyReceiverInputEnvelope;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    @Type(() => FriendRequestWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'requesterId_receiverId'>>;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    @Type(() => FriendRequestWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'requesterId_receiverId'>>;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    @Type(() => FriendRequestWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'requesterId_receiverId'>>;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    @Type(() => FriendRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'requesterId_receiverId'>>;

    @Field(() => [FriendRequestUpdateWithWhereUniqueWithoutReceiverInput], {nullable:true})
    @Type(() => FriendRequestUpdateWithWhereUniqueWithoutReceiverInput)
    update?: Array<FriendRequestUpdateWithWhereUniqueWithoutReceiverInput>;

    @Field(() => [FriendRequestUpdateManyWithWhereWithoutReceiverInput], {nullable:true})
    @Type(() => FriendRequestUpdateManyWithWhereWithoutReceiverInput)
    updateMany?: Array<FriendRequestUpdateManyWithWhereWithoutReceiverInput>;

    @Field(() => [FriendRequestScalarWhereInput], {nullable:true})
    @Type(() => FriendRequestScalarWhereInput)
    deleteMany?: Array<FriendRequestScalarWhereInput>;
}
