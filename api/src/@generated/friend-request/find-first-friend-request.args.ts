import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendRequestWhereInput } from './friend-request-where.input';
import { Type } from 'class-transformer';
import { FriendRequestOrderByWithRelationInput } from './friend-request-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FriendRequestScalarFieldEnum } from './friend-request-scalar-field.enum';

@ArgsType()
export class FindFirstFriendRequestArgs {

    @Field(() => FriendRequestWhereInput, {nullable:true})
    @Type(() => FriendRequestWhereInput)
    where?: FriendRequestWhereInput;

    @Field(() => [FriendRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FriendRequestOrderByWithRelationInput>;

    @Field(() => FriendRequestWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'requesterId_receiverId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FriendRequestScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FriendRequestScalarFieldEnum>;
}
