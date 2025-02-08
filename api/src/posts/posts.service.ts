import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PostCreateInput } from 'src/@generated/post/post-create.input';
import { Post } from 'src/@generated/post/post.model';
import { CreatePostInput } from './inputs/create-post.input';
import { GetFriendsPostsInput } from './inputs/get-friends-posts.input';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) { }

  async createPost(createPostInput: CreatePostInput): Promise<Post> {
    return this.prisma.post.create({
      data: createPostInput,
    });
  }

  async getFriendsPosts(getFriendsPostsInput: GetFriendsPostsInput): Promise<Post[]> {
    const { userId } = getFriendsPostsInput;

    const friends = await this.prisma.friend.findMany({
      where: { OR: [{ userId1: userId }, { userId2: userId }] },
      include: { user1: true, user2: true },
    });

    const friendIds = friends.map(f => (f.userId1 === userId ? f.userId2 : f.userId1));

    return this.prisma.post.findMany({
      where: { authorId: { in: friendIds } },
      include: { author: true },
      orderBy: { createdAt: "desc" },
    });
  }
}
