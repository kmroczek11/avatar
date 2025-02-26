// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  PhoneNumber: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AcceptFriendRequestInput = {
  creatorId: Scalars['String']['input'];
  receiverId: Scalars['String']['input'];
};

export type AutoLogInUserInput = {
  userId: Scalars['String']['input'];
};

export type CancelFriendRequestInput = {
  creatorId: Scalars['String']['input'];
  receiverId: Scalars['String']['input'];
};

export type ChangeEmailInput = {
  email: Scalars['EmailAddress']['input'];
  id: Scalars['String']['input'];
};

export type ChangeEmailResponse = {
  __typename?: 'ChangeEmailResponse';
  userId: Scalars['String']['output'];
};

export type ChangePasswordInput = {
  id: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type ChangePasswordResponse = {
  __typename?: 'ChangePasswordResponse';
  userId: Scalars['String']['output'];
};

export type ChangeProfilePicInput = {
  image: Scalars['Upload']['input'];
  userId: Scalars['String']['input'];
};

export type ChangeProfilePicResponse = {
  __typename?: 'ChangeProfilePicResponse';
  userId: Scalars['String']['output'];
};

export type CreatePostInput = {
  authorId: Scalars['String']['input'];
  content: Scalars['String']['input'];
  image: Scalars['Upload']['input'];
  title: Scalars['String']['input'];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumRoleNullableListFilter = {
  equals?: InputMaybe<Array<Role>>;
  has?: InputMaybe<Role>;
  hasEvery?: InputMaybe<Array<Role>>;
  hasSome?: InputMaybe<Array<Role>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type FindByNameInput = {
  creatorId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ForgotPasswordInput = {
  email: Scalars['EmailAddress']['input'];
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  msg: Scalars['String']['output'];
};

export type Friend = {
  __typename?: 'Friend';
  id: Scalars['ID']['output'];
  user1: User;
  user2: User;
  userId1: Scalars['String']['output'];
  userId2: Scalars['String']['output'];
};

export type FriendCreateManyUser1Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  userId2: Scalars['String']['input'];
};

export type FriendCreateManyUser1InputEnvelope = {
  data: Array<FriendCreateManyUser1Input>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FriendCreateManyUser2Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  userId1: Scalars['String']['input'];
};

export type FriendCreateManyUser2InputEnvelope = {
  data: Array<FriendCreateManyUser2Input>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FriendCreateNestedManyWithoutUser1Input = {
  connect?: InputMaybe<Array<FriendWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FriendCreateOrConnectWithoutUser1Input>>;
  create?: InputMaybe<Array<FriendCreateWithoutUser1Input>>;
  createMany?: InputMaybe<FriendCreateManyUser1InputEnvelope>;
};

export type FriendCreateNestedManyWithoutUser2Input = {
  connect?: InputMaybe<Array<FriendWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FriendCreateOrConnectWithoutUser2Input>>;
  create?: InputMaybe<Array<FriendCreateWithoutUser2Input>>;
  createMany?: InputMaybe<FriendCreateManyUser2InputEnvelope>;
};

export type FriendCreateOrConnectWithoutUser1Input = {
  create: FriendCreateWithoutUser1Input;
  where: FriendWhereUniqueInput;
};

export type FriendCreateOrConnectWithoutUser2Input = {
  create: FriendCreateWithoutUser2Input;
  where: FriendWhereUniqueInput;
};

export type FriendCreateWithoutUser1Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  user2: UserCreateNestedOneWithoutFriendsOfInput;
};

export type FriendCreateWithoutUser2Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  user1: UserCreateNestedOneWithoutFriendsInput;
};

export type FriendListRelationFilter = {
  every?: InputMaybe<FriendWhereInput>;
  none?: InputMaybe<FriendWhereInput>;
  some?: InputMaybe<FriendWhereInput>;
};

export type FriendRequest = {
  __typename?: 'FriendRequest';
  creator: User;
  creatorId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  receiver: User;
  receiverId: Scalars['String']['output'];
  status: Status;
};

export type FriendRequestCreateManyCreatorInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  receiverId: Scalars['String']['input'];
  status?: InputMaybe<Status>;
};

export type FriendRequestCreateManyCreatorInputEnvelope = {
  data: Array<FriendRequestCreateManyCreatorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FriendRequestCreateManyReceiverInput = {
  creatorId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
};

export type FriendRequestCreateManyReceiverInputEnvelope = {
  data: Array<FriendRequestCreateManyReceiverInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FriendRequestCreateNestedManyWithoutCreatorInput = {
  connect?: InputMaybe<Array<FriendRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FriendRequestCreateOrConnectWithoutCreatorInput>>;
  create?: InputMaybe<Array<FriendRequestCreateWithoutCreatorInput>>;
  createMany?: InputMaybe<FriendRequestCreateManyCreatorInputEnvelope>;
};

export type FriendRequestCreateNestedManyWithoutReceiverInput = {
  connect?: InputMaybe<Array<FriendRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FriendRequestCreateOrConnectWithoutReceiverInput>>;
  create?: InputMaybe<Array<FriendRequestCreateWithoutReceiverInput>>;
  createMany?: InputMaybe<FriendRequestCreateManyReceiverInputEnvelope>;
};

export type FriendRequestCreateOrConnectWithoutCreatorInput = {
  create: FriendRequestCreateWithoutCreatorInput;
  where: FriendRequestWhereUniqueInput;
};

export type FriendRequestCreateOrConnectWithoutReceiverInput = {
  create: FriendRequestCreateWithoutReceiverInput;
  where: FriendRequestWhereUniqueInput;
};

export type FriendRequestCreateWithoutCreatorInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  receiver: UserCreateNestedOneWithoutFriendRequestsReceivedInput;
  status?: InputMaybe<Status>;
};

export type FriendRequestCreateWithoutReceiverInput = {
  creator: UserCreateNestedOneWithoutFriendRequestsSentInput;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
};

export type FriendRequestCreatorIdReceiverIdCompoundUniqueInput = {
  creatorId: Scalars['String']['input'];
  receiverId: Scalars['String']['input'];
};

export type FriendRequestListRelationFilter = {
  every?: InputMaybe<FriendRequestWhereInput>;
  none?: InputMaybe<FriendRequestWhereInput>;
  some?: InputMaybe<FriendRequestWhereInput>;
};

export type FriendRequestWhereInput = {
  AND?: InputMaybe<Array<FriendRequestWhereInput>>;
  NOT?: InputMaybe<Array<FriendRequestWhereInput>>;
  OR?: InputMaybe<Array<FriendRequestWhereInput>>;
  creator?: InputMaybe<UserRelationFilter>;
  creatorId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  receiver?: InputMaybe<UserRelationFilter>;
  receiverId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
};

export type FriendRequestWhereUniqueInput = {
  AND?: InputMaybe<Array<FriendRequestWhereInput>>;
  NOT?: InputMaybe<Array<FriendRequestWhereInput>>;
  OR?: InputMaybe<Array<FriendRequestWhereInput>>;
  creator?: InputMaybe<UserRelationFilter>;
  creatorId?: InputMaybe<StringFilter>;
  creatorId_receiverId?: InputMaybe<FriendRequestCreatorIdReceiverIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  receiver?: InputMaybe<UserRelationFilter>;
  receiverId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
};

export type FriendUserId1UserId2CompoundUniqueInput = {
  userId1: Scalars['String']['input'];
  userId2: Scalars['String']['input'];
};

export type FriendWhereInput = {
  AND?: InputMaybe<Array<FriendWhereInput>>;
  NOT?: InputMaybe<Array<FriendWhereInput>>;
  OR?: InputMaybe<Array<FriendWhereInput>>;
  id?: InputMaybe<StringFilter>;
  user1?: InputMaybe<UserRelationFilter>;
  user2?: InputMaybe<UserRelationFilter>;
  userId1?: InputMaybe<StringFilter>;
  userId2?: InputMaybe<StringFilter>;
};

export type FriendWhereUniqueInput = {
  AND?: InputMaybe<Array<FriendWhereInput>>;
  NOT?: InputMaybe<Array<FriendWhereInput>>;
  OR?: InputMaybe<Array<FriendWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  user1?: InputMaybe<UserRelationFilter>;
  user2?: InputMaybe<UserRelationFilter>;
  userId1?: InputMaybe<StringFilter>;
  userId1_userId2?: InputMaybe<FriendUserId1UserId2CompoundUniqueInput>;
  userId2?: InputMaybe<StringFilter>;
};

export type GetAllFriendsInput = {
  userId: Scalars['String']['input'];
};

export type GetFriendsPostsInput = {
  userId: Scalars['String']['input'];
};

export type GetPendingRequestsInput = {
  receiverId: Scalars['String']['input'];
};

export type LogInResponse = {
  __typename?: 'LogInResponse';
  userId: Scalars['String']['output'];
};

export type LogInUserInput = {
  email: Scalars['EmailAddress']['input'];
  password: Scalars['String']['input'];
};

export type LogOutResponse = {
  __typename?: 'LogOutResponse';
  msg: Scalars['String']['output'];
};

export type LogOutUserInput = {
  userId: Scalars['String']['input'];
};

export type MinimalUser = {
  __typename?: 'MinimalUser';
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imgSrc?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptFriendRequest: FriendRequest;
  autoLogInUser: LogInResponse;
  cancelFriendRequest: FriendRequest;
  changeEmail: ChangeEmailResponse;
  changePassword: ChangePasswordResponse;
  changeProfilePic: ChangeProfilePicResponse;
  createPost: Post;
  createUser: User;
  forgotPassword: ForgotPasswordResponse;
  logInUser: LogInResponse;
  logOutUser: LogOutResponse;
  refreshToken: RefreshTokenResponse;
  registerUser: LogInResponse;
  rejectFriendRequest: FriendRequest;
  sendFriendRequest: FriendRequest;
};


export type MutationAcceptFriendRequestArgs = {
  acceptFriendRequestInput: AcceptFriendRequestInput;
};


export type MutationAutoLogInUserArgs = {
  autoLogInUserInput: AutoLogInUserInput;
};


export type MutationCancelFriendRequestArgs = {
  cancelFriendRequestInput: CancelFriendRequestInput;
};


export type MutationChangeEmailArgs = {
  changeEmailInput: ChangeEmailInput;
};


export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};


export type MutationChangeProfilePicArgs = {
  changeProfilePicInput: ChangeProfilePicInput;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreateUserArgs = {
  createUserInput: UserCreateInput;
};


export type MutationForgotPasswordArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};


export type MutationLogInUserArgs = {
  logInUserInput: LogInUserInput;
};


export type MutationLogOutUserArgs = {
  logOutUserInput: LogOutUserInput;
};


export type MutationRefreshTokenArgs = {
  refreshTokenInput: RefreshTokenInput;
};


export type MutationRegisterUserArgs = {
  registerUserInput: RegisterUserInput;
};


export type MutationRejectFriendRequestArgs = {
  rejectFriendRequestInput: RejectFriendRequestInput;
};


export type MutationSendFriendRequestArgs = {
  sendFriendRequestInput: SendFriendRequestInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  authorId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  imgSrc?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PostCreateManyAuthorInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imgSrc?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostCreateManyAuthorInputEnvelope = {
  data: Array<PostCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAuthorInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imgSrc?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostListRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  imgSrc?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PostWhereUniqueInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  imgSrc?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Query = {
  __typename?: 'Query';
  findOne: User;
  findUsersByName: Array<UserWithFriendRequestStatus>;
  getAllFriends: Array<MinimalUser>;
  getFriendsPosts: Array<Post>;
  getPendingRequests: Array<FriendRequest>;
};


export type QueryFindOneArgs = {
  email: Scalars['String']['input'];
};


export type QueryFindUsersByNameArgs = {
  findByNameInput: FindByNameInput;
};


export type QueryGetAllFriendsArgs = {
  getAllFriendsInput: GetAllFriendsInput;
};


export type QueryGetFriendsPostsArgs = {
  getFriendsPostsInput: GetFriendsPostsInput;
};


export type QueryGetPendingRequestsArgs = {
  getPendingRequestsInput: GetPendingRequestsInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RefreshTokenInput = {
  refreshToken: Scalars['String']['input'];
};

export type RefreshTokenResponse = {
  __typename?: 'RefreshTokenResponse';
  accessToken: Scalars['String']['output'];
};

export type RegisterUserInput = {
  email: Scalars['EmailAddress']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['PhoneNumber']['input'];
};

export type RejectFriendRequestInput = {
  creatorId: Scalars['String']['input'];
  receiverId: Scalars['String']['input'];
};

export enum Role {
  User = 'USER'
}

export type SendFriendRequestInput = {
  creatorId: Scalars['String']['input'];
  receiverId: Scalars['String']['input'];
};

export enum Status {
  Accepted = 'ACCEPTED',
  Canceled = 'CANCELED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  friendRequestsReceived?: Maybe<Array<FriendRequest>>;
  friendRequestsSent?: Maybe<Array<FriendRequest>>;
  friends?: Maybe<Array<Friend>>;
  friendsOf?: Maybe<Array<Friend>>;
  id: Scalars['ID']['output'];
  imgSrc?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  posts?: Maybe<Array<Post>>;
  roles?: Maybe<Array<Role>>;
};

export type UserCount = {
  __typename?: 'UserCount';
  friendRequestsReceived: Scalars['Int']['output'];
  friendRequestsSent: Scalars['Int']['output'];
  friends: Scalars['Int']['output'];
  friendsOf: Scalars['Int']['output'];
  posts: Scalars['Int']['output'];
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  friendRequestsReceived?: InputMaybe<FriendRequestCreateNestedManyWithoutReceiverInput>;
  friendRequestsSent?: InputMaybe<FriendRequestCreateNestedManyWithoutCreatorInput>;
  friends?: InputMaybe<FriendCreateNestedManyWithoutUser1Input>;
  friendsOf?: InputMaybe<FriendCreateNestedManyWithoutUser2Input>;
  id?: InputMaybe<Scalars['String']['input']>;
  imgSrc?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  roles?: InputMaybe<UserCreaterolesInput>;
};

export type UserCreateNestedOneWithoutFriendRequestsReceivedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFriendRequestsReceivedInput>;
  create?: InputMaybe<UserCreateWithoutFriendRequestsReceivedInput>;
};

export type UserCreateNestedOneWithoutFriendRequestsSentInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFriendRequestsSentInput>;
  create?: InputMaybe<UserCreateWithoutFriendRequestsSentInput>;
};

export type UserCreateNestedOneWithoutFriendsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFriendsInput>;
  create?: InputMaybe<UserCreateWithoutFriendsInput>;
};

export type UserCreateNestedOneWithoutFriendsOfInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFriendsOfInput>;
  create?: InputMaybe<UserCreateWithoutFriendsOfInput>;
};

export type UserCreateOrConnectWithoutFriendRequestsReceivedInput = {
  create: UserCreateWithoutFriendRequestsReceivedInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFriendRequestsSentInput = {
  create: UserCreateWithoutFriendRequestsSentInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFriendsInput = {
  create: UserCreateWithoutFriendsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFriendsOfInput = {
  create: UserCreateWithoutFriendsOfInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutFriendRequestsReceivedInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  friendRequestsSent?: InputMaybe<FriendRequestCreateNestedManyWithoutCreatorInput>;
  friends?: InputMaybe<FriendCreateNestedManyWithoutUser1Input>;
  friendsOf?: InputMaybe<FriendCreateNestedManyWithoutUser2Input>;
  id?: InputMaybe<Scalars['String']['input']>;
  imgSrc?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  roles?: InputMaybe<UserCreaterolesInput>;
};

export type UserCreateWithoutFriendRequestsSentInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  friendRequestsReceived?: InputMaybe<FriendRequestCreateNestedManyWithoutReceiverInput>;
  friends?: InputMaybe<FriendCreateNestedManyWithoutUser1Input>;
  friendsOf?: InputMaybe<FriendCreateNestedManyWithoutUser2Input>;
  id?: InputMaybe<Scalars['String']['input']>;
  imgSrc?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  roles?: InputMaybe<UserCreaterolesInput>;
};

export type UserCreateWithoutFriendsInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  friendRequestsReceived?: InputMaybe<FriendRequestCreateNestedManyWithoutReceiverInput>;
  friendRequestsSent?: InputMaybe<FriendRequestCreateNestedManyWithoutCreatorInput>;
  friendsOf?: InputMaybe<FriendCreateNestedManyWithoutUser2Input>;
  id?: InputMaybe<Scalars['String']['input']>;
  imgSrc?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  roles?: InputMaybe<UserCreaterolesInput>;
};

export type UserCreateWithoutFriendsOfInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  friendRequestsReceived?: InputMaybe<FriendRequestCreateNestedManyWithoutReceiverInput>;
  friendRequestsSent?: InputMaybe<FriendRequestCreateNestedManyWithoutCreatorInput>;
  friends?: InputMaybe<FriendCreateNestedManyWithoutUser1Input>;
  id?: InputMaybe<Scalars['String']['input']>;
  imgSrc?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  roles?: InputMaybe<UserCreaterolesInput>;
};

export type UserCreaterolesInput = {
  set: Array<Role>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  friendRequestsReceived?: InputMaybe<FriendRequestListRelationFilter>;
  friendRequestsSent?: InputMaybe<FriendRequestListRelationFilter>;
  friends?: InputMaybe<FriendListRelationFilter>;
  friendsOf?: InputMaybe<FriendListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  imgSrc?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  roles?: InputMaybe<EnumRoleNullableListFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<StringFilter>;
  friendRequestsReceived?: InputMaybe<FriendRequestListRelationFilter>;
  friendRequestsSent?: InputMaybe<FriendRequestListRelationFilter>;
  friends?: InputMaybe<FriendListRelationFilter>;
  friendsOf?: InputMaybe<FriendListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  imgSrc?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostListRelationFilter>;
  roles?: InputMaybe<EnumRoleNullableListFilter>;
};

export type UserWithFriendRequestStatus = {
  __typename?: 'UserWithFriendRequestStatus';
  _count: UserCount;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  friendRequestStatus?: Maybe<Status>;
  friendRequestsReceived?: Maybe<Array<FriendRequest>>;
  friendRequestsSent?: Maybe<Array<FriendRequest>>;
  friends?: Maybe<Array<Friend>>;
  friendsOf?: Maybe<Array<Friend>>;
  id: Scalars['ID']['output'];
  imgSrc?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  posts?: Maybe<Array<Post>>;
  roles?: Maybe<Array<Role>>;
};

export type AutoLogInUserMutationVariables = Exact<{
  input: AutoLogInUserInput;
}>;


export type AutoLogInUserMutation = { __typename?: 'Mutation', autoLogInUser: { __typename?: 'LogInResponse', userId: string } };

export type ForgotPasswordMutationVariables = Exact<{
  input: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'ForgotPasswordResponse', msg: string } };

export type LogInUserMutationVariables = Exact<{
  input: LogInUserInput;
}>;


export type LogInUserMutation = { __typename?: 'Mutation', logInUser: { __typename?: 'LogInResponse', userId: string } };

export type LogOutUserMutationVariables = Exact<{
  input: LogOutUserInput;
}>;


export type LogOutUserMutation = { __typename?: 'Mutation', logOutUser: { __typename?: 'LogOutResponse', msg: string } };

export type RefreshTokenMutationVariables = Exact<{
  input: RefreshTokenInput;
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'RefreshTokenResponse', accessToken: string } };

export type RegisterUserMutationVariables = Exact<{
  input: RegisterUserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'LogInResponse', userId: string } };

export type AcceptFriendRequestMutationVariables = Exact<{
  input: AcceptFriendRequestInput;
}>;


export type AcceptFriendRequestMutation = { __typename?: 'Mutation', acceptFriendRequest: { __typename?: 'FriendRequest', id: string } };

export type CancelFriendRequestMutationVariables = Exact<{
  input: CancelFriendRequestInput;
}>;


export type CancelFriendRequestMutation = { __typename?: 'Mutation', cancelFriendRequest: { __typename?: 'FriendRequest', id: string } };

export type GetAllFriendsQueryVariables = Exact<{
  input: GetAllFriendsInput;
}>;


export type GetAllFriendsQuery = { __typename?: 'Query', getAllFriends: Array<{ __typename?: 'MinimalUser', id: string, firstName: string, lastName: string, imgSrc?: string | null }> };

export type GetPendingRequestsQueryVariables = Exact<{
  input: GetPendingRequestsInput;
}>;


export type GetPendingRequestsQuery = { __typename?: 'Query', getPendingRequests: Array<{ __typename?: 'FriendRequest', creator: { __typename?: 'User', id: string, firstName: string, lastName: string, imgSrc?: string | null } }> };

export type RejectFriendRequestMutationVariables = Exact<{
  input: RejectFriendRequestInput;
}>;


export type RejectFriendRequestMutation = { __typename?: 'Mutation', rejectFriendRequest: { __typename?: 'FriendRequest', id: string } };

export type SendFriendRequestMutationVariables = Exact<{
  input: SendFriendRequestInput;
}>;


export type SendFriendRequestMutation = { __typename?: 'Mutation', sendFriendRequest: { __typename?: 'FriendRequest', id: string } };

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string } };

export type GetFriendsPostsQueryVariables = Exact<{
  input: GetFriendsPostsInput;
}>;


export type GetFriendsPostsQuery = { __typename?: 'Query', getFriendsPosts: Array<{ __typename?: 'Post', id: string, title: string, content: string, imgSrc?: string | null, createdAt: any, author: { __typename?: 'User', id: string, firstName: string, lastName: string, imgSrc?: string | null } }> };

export type ChangeEmailMutationVariables = Exact<{
  input: ChangeEmailInput;
}>;


export type ChangeEmailMutation = { __typename?: 'Mutation', changeEmail: { __typename?: 'ChangeEmailResponse', userId: string } };

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'ChangePasswordResponse', userId: string } };

export type FindUsersByNameQueryVariables = Exact<{
  input: FindByNameInput;
}>;


export type FindUsersByNameQuery = { __typename?: 'Query', findUsersByName: Array<{ __typename?: 'UserWithFriendRequestStatus', id: string, imgSrc?: string | null, firstName: string, lastName: string, friendRequestStatus?: Status | null, friendRequestsReceived?: Array<{ __typename?: 'FriendRequest', status: Status, creatorId: string }> | null }> };



export const AutoLogInUserDocument = `
    mutation AutoLogInUser($input: AutoLogInUserInput!) {
  autoLogInUser(autoLogInUserInput: $input) {
    userId
  }
}
    `;

export const useAutoLogInUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AutoLogInUserMutation, TError, AutoLogInUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<AutoLogInUserMutation, TError, AutoLogInUserMutationVariables, TContext>(
      ['AutoLogInUser'],
      (variables?: AutoLogInUserMutationVariables) => fetcher<AutoLogInUserMutation, AutoLogInUserMutationVariables>(client, AutoLogInUserDocument, variables, headers)(),
      options
    )};


useAutoLogInUserMutation.fetcher = (client: GraphQLClient, variables: AutoLogInUserMutationVariables, headers?: RequestInit['headers']) => fetcher<AutoLogInUserMutation, AutoLogInUserMutationVariables>(client, AutoLogInUserDocument, variables, headers);

export const ForgotPasswordDocument = `
    mutation ForgotPassword($input: ForgotPasswordInput!) {
  forgotPassword(forgotPasswordInput: $input) {
    msg
  }
}
    `;

export const useForgotPasswordMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ForgotPasswordMutation, TError, ForgotPasswordMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<ForgotPasswordMutation, TError, ForgotPasswordMutationVariables, TContext>(
      ['ForgotPassword'],
      (variables?: ForgotPasswordMutationVariables) => fetcher<ForgotPasswordMutation, ForgotPasswordMutationVariables>(client, ForgotPasswordDocument, variables, headers)(),
      options
    )};


useForgotPasswordMutation.fetcher = (client: GraphQLClient, variables: ForgotPasswordMutationVariables, headers?: RequestInit['headers']) => fetcher<ForgotPasswordMutation, ForgotPasswordMutationVariables>(client, ForgotPasswordDocument, variables, headers);

export const LogInUserDocument = `
    mutation LogInUser($input: LogInUserInput!) {
  logInUser(logInUserInput: $input) {
    userId
  }
}
    `;

export const useLogInUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LogInUserMutation, TError, LogInUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<LogInUserMutation, TError, LogInUserMutationVariables, TContext>(
      ['LogInUser'],
      (variables?: LogInUserMutationVariables) => fetcher<LogInUserMutation, LogInUserMutationVariables>(client, LogInUserDocument, variables, headers)(),
      options
    )};


useLogInUserMutation.fetcher = (client: GraphQLClient, variables: LogInUserMutationVariables, headers?: RequestInit['headers']) => fetcher<LogInUserMutation, LogInUserMutationVariables>(client, LogInUserDocument, variables, headers);

export const LogOutUserDocument = `
    mutation LogOutUser($input: LogOutUserInput!) {
  logOutUser(logOutUserInput: $input) {
    msg
  }
}
    `;

export const useLogOutUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LogOutUserMutation, TError, LogOutUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<LogOutUserMutation, TError, LogOutUserMutationVariables, TContext>(
      ['LogOutUser'],
      (variables?: LogOutUserMutationVariables) => fetcher<LogOutUserMutation, LogOutUserMutationVariables>(client, LogOutUserDocument, variables, headers)(),
      options
    )};


useLogOutUserMutation.fetcher = (client: GraphQLClient, variables: LogOutUserMutationVariables, headers?: RequestInit['headers']) => fetcher<LogOutUserMutation, LogOutUserMutationVariables>(client, LogOutUserDocument, variables, headers);

export const RefreshTokenDocument = `
    mutation RefreshToken($input: RefreshTokenInput!) {
  refreshToken(refreshTokenInput: $input) {
    accessToken
  }
}
    `;

export const useRefreshTokenMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RefreshTokenMutation, TError, RefreshTokenMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<RefreshTokenMutation, TError, RefreshTokenMutationVariables, TContext>(
      ['RefreshToken'],
      (variables?: RefreshTokenMutationVariables) => fetcher<RefreshTokenMutation, RefreshTokenMutationVariables>(client, RefreshTokenDocument, variables, headers)(),
      options
    )};


useRefreshTokenMutation.fetcher = (client: GraphQLClient, variables: RefreshTokenMutationVariables, headers?: RequestInit['headers']) => fetcher<RefreshTokenMutation, RefreshTokenMutationVariables>(client, RefreshTokenDocument, variables, headers);

export const RegisterUserDocument = `
    mutation RegisterUser($input: RegisterUserInput!) {
  registerUser(registerUserInput: $input) {
    userId
  }
}
    `;

export const useRegisterUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RegisterUserMutation, TError, RegisterUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<RegisterUserMutation, TError, RegisterUserMutationVariables, TContext>(
      ['RegisterUser'],
      (variables?: RegisterUserMutationVariables) => fetcher<RegisterUserMutation, RegisterUserMutationVariables>(client, RegisterUserDocument, variables, headers)(),
      options
    )};


useRegisterUserMutation.fetcher = (client: GraphQLClient, variables: RegisterUserMutationVariables, headers?: RequestInit['headers']) => fetcher<RegisterUserMutation, RegisterUserMutationVariables>(client, RegisterUserDocument, variables, headers);

export const AcceptFriendRequestDocument = `
    mutation AcceptFriendRequest($input: AcceptFriendRequestInput!) {
  acceptFriendRequest(acceptFriendRequestInput: $input) {
    id
  }
}
    `;

export const useAcceptFriendRequestMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AcceptFriendRequestMutation, TError, AcceptFriendRequestMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<AcceptFriendRequestMutation, TError, AcceptFriendRequestMutationVariables, TContext>(
      ['AcceptFriendRequest'],
      (variables?: AcceptFriendRequestMutationVariables) => fetcher<AcceptFriendRequestMutation, AcceptFriendRequestMutationVariables>(client, AcceptFriendRequestDocument, variables, headers)(),
      options
    )};


useAcceptFriendRequestMutation.fetcher = (client: GraphQLClient, variables: AcceptFriendRequestMutationVariables, headers?: RequestInit['headers']) => fetcher<AcceptFriendRequestMutation, AcceptFriendRequestMutationVariables>(client, AcceptFriendRequestDocument, variables, headers);

export const CancelFriendRequestDocument = `
    mutation CancelFriendRequest($input: CancelFriendRequestInput!) {
  cancelFriendRequest(cancelFriendRequestInput: $input) {
    id
  }
}
    `;

export const useCancelFriendRequestMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CancelFriendRequestMutation, TError, CancelFriendRequestMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<CancelFriendRequestMutation, TError, CancelFriendRequestMutationVariables, TContext>(
      ['CancelFriendRequest'],
      (variables?: CancelFriendRequestMutationVariables) => fetcher<CancelFriendRequestMutation, CancelFriendRequestMutationVariables>(client, CancelFriendRequestDocument, variables, headers)(),
      options
    )};


useCancelFriendRequestMutation.fetcher = (client: GraphQLClient, variables: CancelFriendRequestMutationVariables, headers?: RequestInit['headers']) => fetcher<CancelFriendRequestMutation, CancelFriendRequestMutationVariables>(client, CancelFriendRequestDocument, variables, headers);

export const GetAllFriendsDocument = `
    query GetAllFriends($input: GetAllFriendsInput!) {
  getAllFriends(getAllFriendsInput: $input) {
    id
    firstName
    lastName
    imgSrc
  }
}
    `;

export const useGetAllFriendsQuery = <
      TData = GetAllFriendsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAllFriendsQueryVariables,
      options?: UseQueryOptions<GetAllFriendsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetAllFriendsQuery, TError, TData>(
      ['GetAllFriends', variables],
      fetcher<GetAllFriendsQuery, GetAllFriendsQueryVariables>(client, GetAllFriendsDocument, variables, headers),
      options
    )};

useGetAllFriendsQuery.getKey = (variables: GetAllFriendsQueryVariables) => ['GetAllFriends', variables];


useGetAllFriendsQuery.fetcher = (client: GraphQLClient, variables: GetAllFriendsQueryVariables, headers?: RequestInit['headers']) => fetcher<GetAllFriendsQuery, GetAllFriendsQueryVariables>(client, GetAllFriendsDocument, variables, headers);

export const GetPendingRequestsDocument = `
    query GetPendingRequests($input: GetPendingRequestsInput!) {
  getPendingRequests(getPendingRequestsInput: $input) {
    creator {
      id
      firstName
      lastName
      imgSrc
    }
  }
}
    `;

export const useGetPendingRequestsQuery = <
      TData = GetPendingRequestsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPendingRequestsQueryVariables,
      options?: UseQueryOptions<GetPendingRequestsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetPendingRequestsQuery, TError, TData>(
      ['GetPendingRequests', variables],
      fetcher<GetPendingRequestsQuery, GetPendingRequestsQueryVariables>(client, GetPendingRequestsDocument, variables, headers),
      options
    )};

useGetPendingRequestsQuery.getKey = (variables: GetPendingRequestsQueryVariables) => ['GetPendingRequests', variables];


useGetPendingRequestsQuery.fetcher = (client: GraphQLClient, variables: GetPendingRequestsQueryVariables, headers?: RequestInit['headers']) => fetcher<GetPendingRequestsQuery, GetPendingRequestsQueryVariables>(client, GetPendingRequestsDocument, variables, headers);

export const RejectFriendRequestDocument = `
    mutation RejectFriendRequest($input: RejectFriendRequestInput!) {
  rejectFriendRequest(rejectFriendRequestInput: $input) {
    id
  }
}
    `;

export const useRejectFriendRequestMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RejectFriendRequestMutation, TError, RejectFriendRequestMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<RejectFriendRequestMutation, TError, RejectFriendRequestMutationVariables, TContext>(
      ['RejectFriendRequest'],
      (variables?: RejectFriendRequestMutationVariables) => fetcher<RejectFriendRequestMutation, RejectFriendRequestMutationVariables>(client, RejectFriendRequestDocument, variables, headers)(),
      options
    )};


useRejectFriendRequestMutation.fetcher = (client: GraphQLClient, variables: RejectFriendRequestMutationVariables, headers?: RequestInit['headers']) => fetcher<RejectFriendRequestMutation, RejectFriendRequestMutationVariables>(client, RejectFriendRequestDocument, variables, headers);

export const SendFriendRequestDocument = `
    mutation SendFriendRequest($input: SendFriendRequestInput!) {
  sendFriendRequest(sendFriendRequestInput: $input) {
    id
  }
}
    `;

export const useSendFriendRequestMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<SendFriendRequestMutation, TError, SendFriendRequestMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<SendFriendRequestMutation, TError, SendFriendRequestMutationVariables, TContext>(
      ['SendFriendRequest'],
      (variables?: SendFriendRequestMutationVariables) => fetcher<SendFriendRequestMutation, SendFriendRequestMutationVariables>(client, SendFriendRequestDocument, variables, headers)(),
      options
    )};


useSendFriendRequestMutation.fetcher = (client: GraphQLClient, variables: SendFriendRequestMutationVariables, headers?: RequestInit['headers']) => fetcher<SendFriendRequestMutation, SendFriendRequestMutationVariables>(client, SendFriendRequestDocument, variables, headers);

export const CreatePostDocument = `
    mutation CreatePost($input: CreatePostInput!) {
  createPost(createPostInput: $input) {
    id
  }
}
    `;

export const useCreatePostMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreatePostMutation, TError, CreatePostMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<CreatePostMutation, TError, CreatePostMutationVariables, TContext>(
      ['CreatePost'],
      (variables?: CreatePostMutationVariables) => fetcher<CreatePostMutation, CreatePostMutationVariables>(client, CreatePostDocument, variables, headers)(),
      options
    )};


useCreatePostMutation.fetcher = (client: GraphQLClient, variables: CreatePostMutationVariables, headers?: RequestInit['headers']) => fetcher<CreatePostMutation, CreatePostMutationVariables>(client, CreatePostDocument, variables, headers);

export const GetFriendsPostsDocument = `
    query GetFriendsPosts($input: GetFriendsPostsInput!) {
  getFriendsPosts(getFriendsPostsInput: $input) {
    id
    title
    content
    imgSrc
    createdAt
    author {
      id
      firstName
      lastName
      imgSrc
    }
  }
}
    `;

export const useGetFriendsPostsQuery = <
      TData = GetFriendsPostsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetFriendsPostsQueryVariables,
      options?: UseQueryOptions<GetFriendsPostsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetFriendsPostsQuery, TError, TData>(
      ['GetFriendsPosts', variables],
      fetcher<GetFriendsPostsQuery, GetFriendsPostsQueryVariables>(client, GetFriendsPostsDocument, variables, headers),
      options
    )};

useGetFriendsPostsQuery.getKey = (variables: GetFriendsPostsQueryVariables) => ['GetFriendsPosts', variables];


useGetFriendsPostsQuery.fetcher = (client: GraphQLClient, variables: GetFriendsPostsQueryVariables, headers?: RequestInit['headers']) => fetcher<GetFriendsPostsQuery, GetFriendsPostsQueryVariables>(client, GetFriendsPostsDocument, variables, headers);

export const ChangeEmailDocument = `
    mutation ChangeEmail($input: ChangeEmailInput!) {
  changeEmail(changeEmailInput: $input) {
    userId
  }
}
    `;

export const useChangeEmailMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ChangeEmailMutation, TError, ChangeEmailMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<ChangeEmailMutation, TError, ChangeEmailMutationVariables, TContext>(
      ['ChangeEmail'],
      (variables?: ChangeEmailMutationVariables) => fetcher<ChangeEmailMutation, ChangeEmailMutationVariables>(client, ChangeEmailDocument, variables, headers)(),
      options
    )};


useChangeEmailMutation.fetcher = (client: GraphQLClient, variables: ChangeEmailMutationVariables, headers?: RequestInit['headers']) => fetcher<ChangeEmailMutation, ChangeEmailMutationVariables>(client, ChangeEmailDocument, variables, headers);

export const ChangePasswordDocument = `
    mutation ChangePassword($input: ChangePasswordInput!) {
  changePassword(changePasswordInput: $input) {
    userId
  }
}
    `;

export const useChangePasswordMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ChangePasswordMutation, TError, ChangePasswordMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<ChangePasswordMutation, TError, ChangePasswordMutationVariables, TContext>(
      ['ChangePassword'],
      (variables?: ChangePasswordMutationVariables) => fetcher<ChangePasswordMutation, ChangePasswordMutationVariables>(client, ChangePasswordDocument, variables, headers)(),
      options
    )};


useChangePasswordMutation.fetcher = (client: GraphQLClient, variables: ChangePasswordMutationVariables, headers?: RequestInit['headers']) => fetcher<ChangePasswordMutation, ChangePasswordMutationVariables>(client, ChangePasswordDocument, variables, headers);

export const FindUsersByNameDocument = `
    query FindUsersByName($input: FindByNameInput!) {
  findUsersByName(findByNameInput: $input) {
    id
    imgSrc
    firstName
    lastName
    friendRequestsReceived {
      status
      creatorId
    }
    friendRequestStatus
  }
}
    `;

export const useFindUsersByNameQuery = <
      TData = FindUsersByNameQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: FindUsersByNameQueryVariables,
      options?: UseQueryOptions<FindUsersByNameQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<FindUsersByNameQuery, TError, TData>(
      ['FindUsersByName', variables],
      fetcher<FindUsersByNameQuery, FindUsersByNameQueryVariables>(client, FindUsersByNameDocument, variables, headers),
      options
    )};

useFindUsersByNameQuery.getKey = (variables: FindUsersByNameQueryVariables) => ['FindUsersByName', variables];


useFindUsersByNameQuery.fetcher = (client: GraphQLClient, variables: FindUsersByNameQueryVariables, headers?: RequestInit['headers']) => fetcher<FindUsersByNameQuery, FindUsersByNameQueryVariables>(client, FindUsersByNameDocument, variables, headers);
