import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendRequestUpdateInput } from './friend-request-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';

@ArgsType()
export class UpdateOneFriendRequestArgs {

    @Field(() => FriendRequestUpdateInput, {nullable:false})
    @Type(() => FriendRequestUpdateInput)
    data!: FriendRequestUpdateInput;

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    @Type(() => FriendRequestWhereUniqueInput)
    where!: Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'creatorId_receiverId'>;
}
