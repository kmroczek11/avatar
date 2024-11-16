import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => String, {nullable:true})
    imgSrc!: string | null;

    @Field(() => [Role], {nullable:true})
    roles!: Array<keyof typeof Role>;
}
