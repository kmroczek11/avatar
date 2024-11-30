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

export type AutoLogInUserInput = {
  userId: Scalars['String']['input'];
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
  createUser: User;
  logInUser: LogInResponse;
  logOutUser: LogOutResponse;
  registerUser: LogInResponse;
};


export type MutationAutoLogInUserArgs = {
  autoLogInUserInput: AutoLogInUserInput;
};


export type MutationCreateUserArgs = {
  createUserInput: UserCreateInput;
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

export type AutoLogInUserMutationVariables = Exact<{
  input: AutoLogInUserInput;
}>;


export type AutoLogInUserMutation = { __typename?: 'Mutation', autoLogInUser: { __typename?: 'LogInResponse', userId: string } };

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
