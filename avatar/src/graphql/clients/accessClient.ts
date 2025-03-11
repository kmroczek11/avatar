import { GraphQLClient, Variables, RequestDocument, RequestOptions } from "graphql-request";
import createClient from "./client";
import { GraphQLClientRequestHeaders } from "graphql-request/build/esm/types";
import { RefreshTokenMutation, RefreshTokenMutationVariables } from "../../generated/graphql";
import { gql } from "graphql-request";

// Define the mutation manually if it's not auto-generated
const REFRESH_TOKEN_MUTATION = gql`
  mutation RefreshToken($input: RefreshTokenInput!) {
    refreshToken(refreshTokenInput: $input) {
      accessToken
    }
  }
`;

export default function createAccessClient(accessToken: string, refreshToken: string) {
    const client = new GraphQLClient(`${process.env.REACT_APP_HOST}/graphql`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
    });

    // Store the original request method
    const originalRequest = client.request.bind(client);

    // Override request method to handle token refresh
    client.request = async function <T extends Variables, V extends T>(
        documentOrOptions: RequestDocument | RequestOptions<T, V>,
        variables?: V,
        headers?: GraphQLClientRequestHeaders
    ): Promise<T> {
        try {
            if (typeof documentOrOptions === "string" || "kind" in documentOrOptions) {
                // First overload (query as string or DocumentNode)
                return await originalRequest(documentOrOptions, variables, headers);
            } else {
                // Second overload (RequestOptions object)
                return await originalRequest(documentOrOptions as RequestOptions<T, V>);
            }
        } catch (error: any) {
            if (error.response.errors[0].message === "Unauthorized") {
                console.log("Access token expired, attempting to refresh...");
    
                try {
                    // Use a separate client to refresh the token
                    const refreshClient = createClient();
                    const response = await refreshClient.request<RefreshTokenMutation, RefreshTokenMutationVariables>(
                        REFRESH_TOKEN_MUTATION,
                        { input: { refreshToken } }
                    );
    
                    const newAccessToken = response?.refreshToken?.accessToken;
                    if (!newAccessToken) {
                        throw new Error("User must re-authenticate");
                    }
    
                    // Update client headers with the new token
                    client.setHeaders({
                        Authorization: `Bearer ${newAccessToken}`,
                        "Content-Type": "application/json",
                    });
    
                    // Retry the original request with the new token
                    if (typeof documentOrOptions === "string" || "kind" in documentOrOptions) {
                        return await originalRequest(documentOrOptions, variables, headers);
                    } else {
                        return await originalRequest(documentOrOptions as RequestOptions<T, V>);
                    }
                } catch (refreshError) {
                    console.error("Token refresh failed:", refreshError);
                    throw new Error("User must re-authenticate");
                }
            }
            throw error;
        }
    };    

    return client;
}