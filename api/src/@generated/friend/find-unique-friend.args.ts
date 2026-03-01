import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FriendWhereUniqueInput } from './friend-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFriendArgs {

    @Field(() => FriendWhereUniqueInput, {nullable:false})
    @Type(() => FriendWhereUniqueInput)
    where!: Prisma.AtLeast<FriendWhereUniqueInput, 'id' | 'userId1_userId2'>;
}
