import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendUpdateManyMutationInput } from './friend-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FriendWhereInput } from './friend-where.input';

@ArgsType()
export class UpdateManyFriendArgs {

    @Field(() => FriendUpdateManyMutationInput, {nullable:false})
    @Type(() => FriendUpdateManyMutationInput)
    data!: FriendUpdateManyMutationInput;

    @Field(() => FriendWhereInput, {nullable:true})
    @Type(() => FriendWhereInput)
    where?: FriendWhereInput;
}
