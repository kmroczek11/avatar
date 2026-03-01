import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumStatusWithAggregatesFilter } from '../prisma/enum-status-with-aggregates-filter.input';

@InputType()
export class FriendRequestScalarWhereWithAggregatesInput {

    @Field(() => [FriendRequestScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FriendRequestScalarWhereWithAggregatesInput>;

    @Field(() => [FriendRequestScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FriendRequestScalarWhereWithAggregatesInput>;

    @Field(() => [FriendRequestScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FriendRequestScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    creatorId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    receiverId?: StringWithAggregatesFilter;

    @Field(() => EnumStatusWithAggregatesFilter, {nullable:true})
    status?: EnumStatusWithAggregatesFilter;
}
