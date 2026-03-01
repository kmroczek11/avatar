import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendCreateInput } from './friend-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFriendArgs {

    @Field(() => FriendCreateInput, {nullable:false})
    @Type(() => FriendCreateInput)
    data!: FriendCreateInput;
}
