import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendCreateManyInput } from './friend-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFriendArgs {

    @Field(() => [FriendCreateManyInput], {nullable:false})
    @Type(() => FriendCreateManyInput)
    data!: Array<FriendCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
