import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Post } from 'src/@generated/post/post.model';
import { PostsService } from './posts.service';
import { CreatePostInput } from './inputs/create-post.input';
import { GetPostsInput } from './inputs/get-posts.input';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private postsService: PostsService) { }

  @Mutation(() => Post)
  createPost(
    @Args('createPostInput') createPostInput: CreatePostInput,
  ): Promise<Post> {
    return this.postsService.createPost(createPostInput);
  }

  @Query(() => [Post])
  getPosts(
    @Args('getPostsInput') getPostsInput: GetPostsInput,
  ): Promise<Post[]> {
    return this.postsService.getPosts(getPostsInput);
  }
}
