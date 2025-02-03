import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendCreateWithoutUser2Input } from './friend-create-without-user-2.input';
import { Type } from 'class-transformer';
import { FriendCreateOrConnectWithoutUser2Input } from './friend-create-or-connect-without-user-2.input';
import { FriendUpsertWithWhereUniqueWithoutUser2Input } from './friend-upsert-with-where-unique-without-user-2.input';
import { FriendCreateManyUser2InputEnvelope } from './friend-create-many-user-2-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FriendWhereUniqueInput } from './friend-where-unique.input';
import { FriendUpdateWithWhereUniqueWithoutUser2Input } from './friend-update-with-where-unique-without-user-2.input';
import { FriendUpdateManyWithWhereWithoutUser2Input } from './friend-update-many-with-where-without-user-2.input';
import { FriendScalarWhereInput } from './friend-scalar-where.input';

@InputType()
export class FriendUpdateManyWithoutUser2NestedInput {

    @Field(() => [FriendCreateWithoutUser2Input], {nullable:true})
    @Type(() => FriendCreateWithoutUser2Input)
    create?: Array<FriendCreateWithoutUser2Input>;

    @Field(() => [FriendCreateOrConnectWithoutUser2Input], {nullable:true})
    @Type(() => FriendCreateOrConnectWithoutUser2Input)
    connectOrCreate?: Array<FriendCreateOrConnectWithoutUser2Input>;

    @Field(() => [FriendUpsertWithWhereUniqueWithoutUser2Input], {nullable:true})
    @Type(() => FriendUpsertWithWhereUniqueWithoutUser2Input)
    upsert?: Array<FriendUpsertWithWhereUniqueWithoutUser2Input>;

    @Field(() => FriendCreateManyUser2InputEnvelope, {nullable:true})
    @Type(() => FriendCreateManyUser2InputEnvelope)
    createMany?: FriendCreateManyUser2InputEnvelope;

    @Field(() => [FriendWhereUniqueInput], {nullable:true})
    @Type(() => FriendWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FriendWhereUniqueInput, 'id' | 'userId1_userId2'>>;

    @Field(() => [FriendWhereUniqueInput], {nullable:true})
    @Type(() => FriendWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FriendWhereUniqueInput, 'id' | 'userId1_userId2'>>;

    @Field(() => [FriendWhereUniqueInput], {nullable:true})
    @Type(() => FriendWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FriendWhereUniqueInput, 'id' | 'userId1_userId2'>>;

    @Field(() => [FriendWhereUniqueInput], {nullable:true})
    @Type(() => FriendWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FriendWhereUniqueInput, 'id' | 'userId1_userId2'>>;

    @Field(() => [FriendUpdateWithWhereUniqueWithoutUser2Input], {nullable:true})
    @Type(() => FriendUpdateWithWhereUniqueWithoutUser2Input)
    update?: Array<FriendUpdateWithWhereUniqueWithoutUser2Input>;

    @Field(() => [FriendUpdateManyWithWhereWithoutUser2Input], {nullable:true})
    @Type(() => FriendUpdateManyWithWhereWithoutUser2Input)
    updateMany?: Array<FriendUpdateManyWithWhereWithoutUser2Input>;

    @Field(() => [FriendScalarWhereInput], {nullable:true})
    @Type(() => FriendScalarWhereInput)
    deleteMany?: Array<FriendScalarWhereInput>;
}
