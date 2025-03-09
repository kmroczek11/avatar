import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PostCreateInput } from 'src/@generated/post/post-create.input';
import { Post } from 'src/@generated/post/post.model';
import { CreatePostInput } from './inputs/create-post.input';
import { GetPostsInput } from './inputs/get-posts.input';
import { FileUpload } from 'graphql-upload-ts';
import { saveImage } from 'src/core/helpers/image-storage';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) { }

  async createPost(createPostInput: CreatePostInput): Promise<Post> {
    const { title, content, image, authorId } = createPostInput
    
    if (await image) {
      const imageData: FileUpload = await image

      const filePath = await saveImage(imageData, 'posts')

      return this.prisma.post.create({
        data: {
          title,
          content,
          imgSrc: filePath,
          authorId
        },
      });
    } else {
      return this.prisma.post.create({
        data: {
          title,
          content,
          imgSrc: null,
          authorId
        },
      });
    }
  }

  async getPosts(getPostsInput: GetPostsInput): Promise<Post[]> {
    const { userId } = getPostsInput;

    const friends = await this.prisma.friend.findMany({
      where: { OR: [{ userId1: userId }, { userId2: userId }] },
      select: { userId1: true, userId2: true },
    });

    const friendIds = friends.map(f => (f.userId1 === userId ? f.userId2 : f.userId1))

    const authorIds = [userId,...friendIds]

    return this.prisma.post.findMany({
      where: { authorId: { in: authorIds } },
      include: { author: true },
      orderBy: { createdAt: "desc" },
    });
  }
}
