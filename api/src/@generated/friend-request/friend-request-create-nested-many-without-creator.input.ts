import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestCreateWithoutCreatorInput } from './friend-request-create-without-creator.input';
import { Type } from 'class-transformer';
import { FriendRequestCreateOrConnectWithoutCreatorInput } from './friend-request-create-or-connect-without-creator.input';
import { FriendRequestCreateManyCreatorInputEnvelope } from './friend-request-create-many-creator-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';

@InputType()
export class FriendRequestCreateNestedManyWithoutCreatorInput {

    @Field(() => [FriendRequestCreateWithoutCreatorInput], {nullable:true})
    @Type(() => FriendRequestCreateWithoutCreatorInput)
    create?: Array<FriendRequestCreateWithoutCreatorInput>;

    @Field(() => [FriendRequestCreateOrConnectWithoutCreatorInput], {nullable:true})
    @Type(() => FriendRequestCreateOrConnectWithoutCreatorInput)
    connectOrCreate?: Array<FriendRequestCreateOrConnectWithoutCreatorInput>;

    @Field(() => FriendRequestCreateManyCreatorInputEnvelope, {nullable:true})
    @Type(() => FriendRequestCreateManyCreatorInputEnvelope)
    createMany?: FriendRequestCreateManyCreatorInputEnvelope;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    @Type(() => FriendRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'creatorId_receiverId'>>;
}
