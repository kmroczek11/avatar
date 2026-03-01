import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendWhereInput } from './friend-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFriendArgs {

    @Field(() => FriendWhereInput, {nullable:true})
    @Type(() => FriendWhereInput)
    where?: FriendWhereInput;
}
