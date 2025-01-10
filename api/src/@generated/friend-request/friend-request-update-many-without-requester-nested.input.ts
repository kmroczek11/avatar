import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestCreateWithoutRequesterInput } from './friend-request-create-without-requester.input';
import { Type } from 'class-transformer';
import { FriendRequestCreateOrConnectWithoutRequesterInput } from './friend-request-create-or-connect-without-requester.input';
import { FriendRequestUpsertWithWhereUniqueWithoutRequesterInput } from './friend-request-upsert-with-where-unique-without-requester.input';
import { FriendRequestCreateManyRequesterInputEnvelope } from './friend-request-create-many-requester-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { FriendRequestUpdateWithWhereUniqueWithoutRequesterInput } from './friend-request-update-with-where-unique-without-requester.input';
import { FriendRequestUpdateManyWithWhereWithoutRequesterInput } from './friend-request-update-many-with-where-without-requester.input';
import { FriendRequestScalarWhereInput } from './friend-request-scalar-where.input';

@InputType()
export class FriendRequestUpdateManyWithoutRequesterNestedInput {

    @Field(() => [FriendRequestCreateWithoutRequesterInput], {nullable:true})
    @Type(() => FriendRequestCreateWithoutRequesterInput)
    create?: Array<FriendRequestCreateWithoutRequesterInput>;

    @Field(() => [FriendRequestCreateOrConnectWithoutRequesterInput], {nullable:true})
    @Type(() => FriendRequestCreateOrConnectWithoutRequesterInput)
    connectOrCreate?: Array<FriendRequestCreateOrConnectWithoutRequesterInput>;

    @Field(() => [FriendRequestUpsertWithWhereUniqueWithoutRequesterInput], {nullable:true})
    @Type(() => FriendRequestUpsertWithWhereUniqueWithoutRequesterInput)
    upsert?: Array<FriendRequestUpsertWithWhereUniqueWithoutRequesterInput>;

    @Field(() => FriendRequestCreateManyRequesterInputEnvelope, {nullable:true})
    @Type(() => FriendRequestCreateManyRequesterInputEnvelope)
    createMany?: FriendRequestCreateManyRequesterInputEnvelope;

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

    @Field(() => [FriendRequestUpdateWithWhereUniqueWithoutRequesterInput], {nullable:true})
    @Type(() => FriendRequestUpdateWithWhereUniqueWithoutRequesterInput)
    update?: Array<FriendRequestUpdateWithWhereUniqueWithoutRequesterInput>;

    @Field(() => [FriendRequestUpdateManyWithWhereWithoutRequesterInput], {nullable:true})
    @Type(() => FriendRequestUpdateManyWithWhereWithoutRequesterInput)
    updateMany?: Array<FriendRequestUpdateManyWithWhereWithoutRequesterInput>;

    @Field(() => [FriendRequestScalarWhereInput], {nullable:true})
    @Type(() => FriendRequestScalarWhereInput)
    deleteMany?: Array<FriendRequestScalarWhereInput>;
}
