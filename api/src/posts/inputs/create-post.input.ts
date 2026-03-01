import { Field, InputType } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload-ts'

@InputType()
export class CreatePostInput {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => GraphQLUpload, { nullable: true })
  image?: Promise<FileUpload>;

  @Field()
  authorId: string;
}
