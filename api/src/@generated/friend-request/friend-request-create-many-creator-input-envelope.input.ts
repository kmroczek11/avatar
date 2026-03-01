import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestCreateManyCreatorInput } from './friend-request-create-many-creator.input';
import { Type } from 'class-transformer';

@InputType()
export class FriendRequestCreateManyCreatorInputEnvelope {

    @Field(() => [FriendRequestCreateManyCreatorInput], {nullable:false})
    @Type(() => FriendRequestCreateManyCreatorInput)
    data!: Array<FriendRequestCreateManyCreatorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
