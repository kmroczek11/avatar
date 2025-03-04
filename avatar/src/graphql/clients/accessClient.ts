import { GraphQLClient } from "graphql-request";

export default function createAccessClient(accessToken: string) {
    return new GraphQLClient(`${process.env.REACT_APP_HOST}/graphql` as string, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
    });
}