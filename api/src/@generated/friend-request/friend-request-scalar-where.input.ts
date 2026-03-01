import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumStatusFilter } from '../prisma/enum-status-filter.input';

@InputType()
export class FriendRequestScalarWhereInput {

    @Field(() => [FriendRequestScalarWhereInput], {nullable:true})
    AND?: Array<FriendRequestScalarWhereInput>;

    @Field(() => [FriendRequestScalarWhereInput], {nullable:true})
    OR?: Array<FriendRequestScalarWhereInput>;

    @Field(() => [FriendRequestScalarWhereInput], {nullable:true})
    NOT?: Array<FriendRequestScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    creatorId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    receiverId?: StringFilter;

    @Field(() => EnumStatusFilter, {nullable:true})
    status?: EnumStatusFilter;
}
