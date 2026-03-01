import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendCreateManyUser1Input } from './friend-create-many-user-1.input';
import { Type } from 'class-transformer';

@InputType()
export class FriendCreateManyUser1InputEnvelope {

    @Field(() => [FriendCreateManyUser1Input], {nullable:false})
    @Type(() => FriendCreateManyUser1Input)
    data!: Array<FriendCreateManyUser1Input>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
