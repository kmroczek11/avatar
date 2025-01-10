import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestCreateWithoutRequesterInput } from './friend-request-create-without-requester.input';
import { Type } from 'class-transformer';
import { FriendRequestCreateOrConnectWithoutRequesterInput } from './friend-request-create-or-connect-without-requester.input';
import { FriendRequestCreateManyRequesterInputEnvelope } from './friend-request-create-many-requester-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';

@InputType()
export class FriendRequestUncheckedCreateNestedManyWithoutRequesterInput {

    @Field(() => [FriendRequestCreateWithoutRequesterInput], {nullable:true})
    @Type(() => FriendRequestCreateWithoutRequesterInput)
    create?: Array<FriendRequestCreateWithoutRequesterInput>;

    @Field(() => [FriendRequestCreateOrConnectWithoutRequesterInput], {nullable:true})
    @Type(() => FriendRequestCreateOrConnectWithoutRequesterInput)
    connectOrCreate?: Array<FriendRequestCreateOrConnectWithoutRequesterInput>;

    @Field(() => FriendRequestCreateManyRequesterInputEnvelope, {nullable:true})
    @Type(() => FriendRequestCreateManyRequesterInputEnvelope)
    createMany?: FriendRequestCreateManyRequesterInputEnvelope;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    @Type(() => FriendRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'requesterId_receiverId'>>;
}
