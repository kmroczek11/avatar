import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendScalarWhereInput } from './friend-scalar-where.input';
import { Type } from 'class-transformer';
import { FriendUpdateManyMutationInput } from './friend-update-many-mutation.input';

@InputType()
export class FriendUpdateManyWithWhereWithoutUser1Input {

    @Field(() => FriendScalarWhereInput, {nullable:false})
    @Type(() => FriendScalarWhereInput)
    where!: FriendScalarWhereInput;

    @Field(() => FriendUpdateManyMutationInput, {nullable:false})
    @Type(() => FriendUpdateManyMutationInput)
    data!: FriendUpdateManyMutationInput;
}
