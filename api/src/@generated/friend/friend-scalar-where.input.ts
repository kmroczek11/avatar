import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class FriendScalarWhereInput {

    @Field(() => [FriendScalarWhereInput], {nullable:true})
    AND?: Array<FriendScalarWhereInput>;

    @Field(() => [FriendScalarWhereInput], {nullable:true})
    OR?: Array<FriendScalarWhereInput>;

    @Field(() => [FriendScalarWhereInput], {nullable:true})
    NOT?: Array<FriendScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId1?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId2?: StringFilter;
}
