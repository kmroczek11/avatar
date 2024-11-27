// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
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

export type LogInResponse = {
  __typename?: 'LogInResponse';
  accessToken: Scalars['String']['output'];
  user: User;
};

export type LogInUserInput = {
  email: Scalars['EmailAddress']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  logInUser: LogInResponse;
  registerUser: LogInResponse;
};


export type MutationCreateUserArgs = {
  createUserInput: UserCreateInput;
};


export type MutationLogInUserArgs = {
  logInUserInput: LogInUserInput;
};


export type MutationRegisterUserArgs = {
  registerUserInput: RegisterUserInput;
};

export type Query = {
  __typename?: 'Query';
  findOne: User;
};


export type QueryFindOneArgs = {
  email: Scalars['String']['input'];
};

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

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imgSrc?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  roles?: Maybe<Array<Role>>;
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
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

export type RegisterUserMutationVariables = Exact<{
  input: RegisterUserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'LogInResponse', accessToken: string, user: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, imgSrc?: string | null, roles?: Array<Role> | null } } };



export const RegisterUserDocument = `
    mutation RegisterUser($input: RegisterUserInput!) {
  registerUser(registerUserInput: $input) {
    accessToken
    user {
      id
      firstName
      lastName
      email
      imgSrc
      roles
    }
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
