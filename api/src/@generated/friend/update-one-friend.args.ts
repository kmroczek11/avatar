import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendUpdateInput } from './friend-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FriendWhereUniqueInput } from './friend-where-unique.input';

@ArgsType()
export class UpdateOneFriendArgs {

    @Field(() => FriendUpdateInput, {nullable:false})
    @Type(() => FriendUpdateInput)
    data!: FriendUpdateInput;

    @Field(() => FriendWhereUniqueInput, {nullable:false})
    @Type(() => FriendWhereUniqueInput)
    where!: Prisma.AtLeast<FriendWhereUniqueInput, 'id' | 'userId1_userId2'>;
}
