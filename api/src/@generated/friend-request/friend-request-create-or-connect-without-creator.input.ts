import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { Type } from 'class-transformer';
import { FriendRequestCreateWithoutCreatorInput } from './friend-request-create-without-creator.input';

@InputType()
export class FriendRequestCreateOrConnectWithoutCreatorInput {

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    @Type(() => FriendRequestWhereUniqueInput)
    where!: Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'creatorId_receiverId'>;

    @Field(() => FriendRequestCreateWithoutCreatorInput, {nullable:false})
    @Type(() => FriendRequestCreateWithoutCreatorInput)
    create!: FriendRequestCreateWithoutCreatorInput;
}
