import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestCreateWithoutCreatorInput } from './friend-request-create-without-creator.input';
import { Type } from 'class-transformer';
import { FriendRequestCreateOrConnectWithoutCreatorInput } from './friend-request-create-or-connect-without-creator.input';
import { FriendRequestUpsertWithWhereUniqueWithoutCreatorInput } from './friend-request-upsert-with-where-unique-without-creator.input';
import { FriendRequestCreateManyCreatorInputEnvelope } from './friend-request-create-many-creator-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { FriendRequestUpdateWithWhereUniqueWithoutCreatorInput } from './friend-request-update-with-where-unique-without-creator.input';
import { FriendRequestUpdateManyWithWhereWithoutCreatorInput } from './friend-request-update-many-with-where-without-creator.input';
import { FriendRequestScalarWhereInput } from './friend-request-scalar-where.input';

@InputType()
export class FriendRequestUpdateManyWithoutCreatorNestedInput {

    @Field(() => [FriendRequestCreateWithoutCreatorInput], {nullable:true})
    @Type(() => FriendRequestCreateWithoutCreatorInput)
    create?: Array<FriendRequestCreateWithoutCreatorInput>;

    @Field(() => [FriendRequestCreateOrConnectWithoutCreatorInput], {nullable:true})
    @Type(() => FriendRequestCreateOrConnectWithoutCreatorInput)
    connectOrCreate?: Array<FriendRequestCreateOrConnectWithoutCreatorInput>;

    @Field(() => [FriendRequestUpsertWithWhereUniqueWithoutCreatorInput], {nullable:true})
    @Type(() => FriendRequestUpsertWithWhereUniqueWithoutCreatorInput)
    upsert?: Array<FriendRequestUpsertWithWhereUniqueWithoutCreatorInput>;

    @Field(() => FriendRequestCreateManyCreatorInputEnvelope, {nullable:true})
    @Type(() => FriendRequestCreateManyCreatorInputEnvelope)
    createMany?: FriendRequestCreateManyCreatorInputEnvelope;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    @Type(() => FriendRequestWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'creatorId_receiverId'>>;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    @Type(() => FriendRequestWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'creatorId_receiverId'>>;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    @Type(() => FriendRequestWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'creatorId_receiverId'>>;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    @Type(() => FriendRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'creatorId_receiverId'>>;

    @Field(() => [FriendRequestUpdateWithWhereUniqueWithoutCreatorInput], {nullable:true})
    @Type(() => FriendRequestUpdateWithWhereUniqueWithoutCreatorInput)
    update?: Array<FriendRequestUpdateWithWhereUniqueWithoutCreatorInput>;

    @Field(() => [FriendRequestUpdateManyWithWhereWithoutCreatorInput], {nullable:true})
    @Type(() => FriendRequestUpdateManyWithWhereWithoutCreatorInput)
    updateMany?: Array<FriendRequestUpdateManyWithWhereWithoutCreatorInput>;

    @Field(() => [FriendRequestScalarWhereInput], {nullable:true})
    @Type(() => FriendRequestScalarWhereInput)
    deleteMany?: Array<FriendRequestScalarWhereInput>;
}
