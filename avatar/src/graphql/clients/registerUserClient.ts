import { GraphQLClient } from "graphql-request";

export default function createRegisterUserClient(){
  return new GraphQLClient(`${process.env.REACT_APP_HOST}/graphql` as string, {
    headers: {
      "Content-Type": "application/json",
    },
  })
}