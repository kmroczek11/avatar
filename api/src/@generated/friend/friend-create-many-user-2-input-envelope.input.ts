import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendCreateManyUser2Input } from './friend-create-many-user-2.input';
import { Type } from 'class-transformer';

@InputType()
export class FriendCreateManyUser2InputEnvelope {

    @Field(() => [FriendCreateManyUser2Input], {nullable:false})
    @Type(() => FriendCreateManyUser2Input)
    data!: Array<FriendCreateManyUser2Input>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
