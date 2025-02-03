import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendCreateWithoutUser1Input } from './friend-create-without-user-1.input';
import { Type } from 'class-transformer';
import { FriendCreateOrConnectWithoutUser1Input } from './friend-create-or-connect-without-user-1.input';
import { FriendUpsertWithWhereUniqueWithoutUser1Input } from './friend-upsert-with-where-unique-without-user-1.input';
import { FriendCreateManyUser1InputEnvelope } from './friend-create-many-user-1-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FriendWhereUniqueInput } from './friend-where-unique.input';
import { FriendUpdateWithWhereUniqueWithoutUser1Input } from './friend-update-with-where-unique-without-user-1.input';
import { FriendUpdateManyWithWhereWithoutUser1Input } from './friend-update-many-with-where-without-user-1.input';
import { FriendScalarWhereInput } from './friend-scalar-where.input';

@InputType()
export class FriendUpdateManyWithoutUser1NestedInput {

    @Field(() => [FriendCreateWithoutUser1Input], {nullable:true})
    @Type(() => FriendCreateWithoutUser1Input)
    create?: Array<FriendCreateWithoutUser1Input>;

    @Field(() => [FriendCreateOrConnectWithoutUser1Input], {nullable:true})
    @Type(() => FriendCreateOrConnectWithoutUser1Input)
    connectOrCreate?: Array<FriendCreateOrConnectWithoutUser1Input>;

    @Field(() => [FriendUpsertWithWhereUniqueWithoutUser1Input], {nullable:true})
    @Type(() => FriendUpsertWithWhereUniqueWithoutUser1Input)
    upsert?: Array<FriendUpsertWithWhereUniqueWithoutUser1Input>;

    @Field(() => FriendCreateManyUser1InputEnvelope, {nullable:true})
    @Type(() => FriendCreateManyUser1InputEnvelope)
    createMany?: FriendCreateManyUser1InputEnvelope;

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

    @Field(() => [FriendUpdateWithWhereUniqueWithoutUser1Input], {nullable:true})
    @Type(() => FriendUpdateWithWhereUniqueWithoutUser1Input)
    update?: Array<FriendUpdateWithWhereUniqueWithoutUser1Input>;

    @Field(() => [FriendUpdateManyWithWhereWithoutUser1Input], {nullable:true})
    @Type(() => FriendUpdateManyWithWhereWithoutUser1Input)
    updateMany?: Array<FriendUpdateManyWithWhereWithoutUser1Input>;

    @Field(() => [FriendScalarWhereInput], {nullable:true})
    @Type(() => FriendScalarWhereInput)
    deleteMany?: Array<FriendScalarWhereInput>;
}
