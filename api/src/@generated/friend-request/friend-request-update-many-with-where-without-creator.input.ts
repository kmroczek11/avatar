import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestScalarWhereInput } from './friend-request-scalar-where.input';
import { Type } from 'class-transformer';
import { FriendRequestUpdateManyMutationInput } from './friend-request-update-many-mutation.input';

@InputType()
export class FriendRequestUpdateManyWithWhereWithoutCreatorInput {

    @Field(() => FriendRequestScalarWhereInput, {nullable:false})
    @Type(() => FriendRequestScalarWhereInput)
    where!: FriendRequestScalarWhereInput;

    @Field(() => FriendRequestUpdateManyMutationInput, {nullable:false})
    @Type(() => FriendRequestUpdateManyMutationInput)
    data!: FriendRequestUpdateManyMutationInput;
}
