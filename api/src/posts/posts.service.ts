import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PostCreateInput } from 'src/@generated/post/post-create.input';
import { Post } from 'src/@generated/post/post.model';
import { CreatePostInput } from './inputs/create-post.input';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) { }

  async createPost(createPostInput: CreatePostInput): Promise<Post> {
    return this.prisma.post.create({
      data: createPostInput,
    });
  }
}
