import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendCreateWithoutUser2Input } from './friend-create-without-user-2.input';
import { Type } from 'class-transformer';
import { FriendCreateOrConnectWithoutUser2Input } from './friend-create-or-connect-without-user-2.input';
import { FriendCreateManyUser2InputEnvelope } from './friend-create-many-user-2-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FriendWhereUniqueInput } from './friend-where-unique.input';

@InputType()
export class FriendUncheckedCreateNestedManyWithoutUser2Input {

    @Field(() => [FriendCreateWithoutUser2Input], {nullable:true})
    @Type(() => FriendCreateWithoutUser2Input)
    create?: Array<FriendCreateWithoutUser2Input>;

    @Field(() => [FriendCreateOrConnectWithoutUser2Input], {nullable:true})
    @Type(() => FriendCreateOrConnectWithoutUser2Input)
    connectOrCreate?: Array<FriendCreateOrConnectWithoutUser2Input>;

    @Field(() => FriendCreateManyUser2InputEnvelope, {nullable:true})
    @Type(() => FriendCreateManyUser2InputEnvelope)
    createMany?: FriendCreateManyUser2InputEnvelope;

    @Field(() => [FriendWhereUniqueInput], {nullable:true})
    @Type(() => FriendWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FriendWhereUniqueInput, 'id' | 'userId1_userId2'>>;
}
