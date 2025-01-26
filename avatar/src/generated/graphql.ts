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
  EmailAddress: { input: any; output: any; }
  PhoneNumber: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AutoLogInUserInput = {
  userId: Scalars['String']['input'];
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

export type ForgotPasswordInput = {
  email: Scalars['EmailAddress']['input'];
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  msg: Scalars['String']['output'];
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

export type Mutation = {
  __typename?: 'Mutation';
  autoLogInUser: LogInResponse;
  changeEmail: ChangeEmailResponse;
  changePassword: ChangePasswordResponse;
  changeProfilePic: ChangeProfilePicResponse;
  createUser: User;
  forgotPassword: ForgotPasswordResponse;
  logInUser: LogInResponse;
  logOutUser: LogOutResponse;
  registerUser: LogInResponse;
};


export type MutationAutoLogInUserArgs = {
  autoLogInUserInput: AutoLogInUserInput;
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


export type MutationRegisterUserArgs = {
  registerUserInput: RegisterUserInput;
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

export type Query = {
  __typename?: 'Query';
  findOne: User;
  findUsersByName: Array<User>;
};


export type QueryFindOneArgs = {
  email: Scalars['String']['input'];
};


export type QueryFindUsersByNameArgs = {
  name: Scalars['String']['input'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegisterUserInput = {
  email: Scalars['EmailAddress']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['PhoneNumber']['input'];
};

export enum Role {
  User = 'USER'
}

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
  id: Scalars['ID']['output'];
  imgSrc?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  roles?: Maybe<Array<Role>>;
};

export type UserCount = {
  __typename?: 'UserCount';
  friendRequestsReceived: Scalars['Int']['output'];
  friendRequestsSent: Scalars['Int']['output'];
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  friendRequestsReceived?: InputMaybe<FriendRequestCreateNestedManyWithoutReceiverInput>;
  friendRequestsSent?: InputMaybe<FriendRequestCreateNestedManyWithoutCreatorInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imgSrc?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
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

export type UserCreateOrConnectWithoutFriendRequestsReceivedInput = {
  create: UserCreateWithoutFriendRequestsReceivedInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFriendRequestsSentInput = {
  create: UserCreateWithoutFriendRequestsSentInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutFriendRequestsReceivedInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  friendRequestsSent?: InputMaybe<FriendRequestCreateNestedManyWithoutCreatorInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imgSrc?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  roles?: InputMaybe<UserCreaterolesInput>;
};

export type UserCreateWithoutFriendRequestsSentInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  friendRequestsReceived?: InputMaybe<FriendRequestCreateNestedManyWithoutReceiverInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imgSrc?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
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
  id?: InputMaybe<StringFilter>;
  imgSrc?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  imgSrc?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<EnumRoleNullableListFilter>;
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

export type RegisterUserMutationVariables = Exact<{
  input: RegisterUserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'LogInResponse', userId: string } };

export type ChangeEmailMutationVariables = Exact<{
  input: ChangeEmailInput;
}>;


export type ChangeEmailMutation = { __typename?: 'Mutation', changeEmail: { __typename?: 'ChangeEmailResponse', userId: string } };

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'ChangePasswordResponse', userId: string } };

export type ChangeProfilePicMutationVariables = Exact<{
  input: ChangeProfilePicInput;
}>;


export type ChangeProfilePicMutation = { __typename?: 'Mutation', changeProfilePic: { __typename?: 'ChangeProfilePicResponse', userId: string } };

export type FindUsersByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type FindUsersByNameQuery = { __typename?: 'Query', findUsersByName: Array<{ __typename?: 'User', firstName: string, lastName: string }> };



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

export const ChangeProfilePicDocument = `
    mutation ChangeProfilePic($input: ChangeProfilePicInput!) {
  changeProfilePic(changeProfilePicInput: $input) {
    userId
  }
}
    `;

export const useChangeProfilePicMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ChangeProfilePicMutation, TError, ChangeProfilePicMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<ChangeProfilePicMutation, TError, ChangeProfilePicMutationVariables, TContext>(
      ['ChangeProfilePic'],
      (variables?: ChangeProfilePicMutationVariables) => fetcher<ChangeProfilePicMutation, ChangeProfilePicMutationVariables>(client, ChangeProfilePicDocument, variables, headers)(),
      options
    )};


useChangeProfilePicMutation.fetcher = (client: GraphQLClient, variables: ChangeProfilePicMutationVariables, headers?: RequestInit['headers']) => fetcher<ChangeProfilePicMutation, ChangeProfilePicMutationVariables>(client, ChangeProfilePicDocument, variables, headers);

export const FindUsersByNameDocument = `
    query FindUsersByName($name: String!) {
  findUsersByName(name: $name) {
    firstName
    lastName
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
