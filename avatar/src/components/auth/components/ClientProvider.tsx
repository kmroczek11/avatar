import { createContext, useContext, useEffect, useState } from "react"
import { GraphQLClient, gql, Variables, RequestDocument, RequestOptions } from "graphql-request";
import { useAuth } from "./AuthProvider";
import { GraphQLClientRequestHeaders } from "graphql-request/build/esm/types";
import { RefreshTokenMutation, RefreshTokenMutationVariables } from "../../../generated/graphql";
import { useTokens } from "./TokensProvider";

interface ClientProviderProps {
    client: GraphQLClient | null,
    accessClient: GraphQLClient | null,
}

const ClientContext = createContext<ClientProviderProps>({ client: null, accessClient: null })

const REFRESH_TOKEN_MUTATION = gql`
  mutation RefreshToken($input: RefreshTokenInput!) {
    refreshToken(refreshTokenInput: $input) {
      accessToken
    }
  }
`

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
    const [client, setClient] = useState<GraphQLClient | null>(null)
    const [accessClient, setAccessClient] = useState<GraphQLClient | null>(null)
    const { refreshToken, accessToken, setAccessToken } = useTokens()
    const { user, logOut } = useAuth()

    function initializeClient() {
        setClient(new GraphQLClient(`${process.env.REACT_APP_HOST}/graphql`))
    }

    function initializeAccessClient() {
        const client = new GraphQLClient(`${process.env.REACT_APP_HOST}/graphql`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        });

        const originalRequest = client.request.bind(client)

        client.request = async function <T extends Variables, V extends T>(
            documentOrOptions: RequestDocument | RequestOptions<T, V>,
            variables?: V,
            headers?: GraphQLClientRequestHeaders
        ): Promise<T> {
            try {
                if (typeof documentOrOptions === "string" || "kind" in documentOrOptions) {
                    return await originalRequest(documentOrOptions, variables, headers)
                } else {
                    return await originalRequest(documentOrOptions as RequestOptions<T, V>)
                }
            } catch (error: any) {
                if (error.response.errors[0].message === "Unauthorized") {
                    try {
                        const refreshClient = client
                        const response = await refreshClient.request<RefreshTokenMutation, RefreshTokenMutationVariables>(
                            REFRESH_TOKEN_MUTATION,
                            { input: { refreshToken: refreshToken! } }
                        );

                        const newAccessToken = response?.refreshToken?.accessToken
                        if (!newAccessToken) {
                            logOut({ input: { userId: user?.id! } })
                        }

                        setAccessToken(newAccessToken)

                        client.setHeaders({
                            Authorization: `Bearer ${newAccessToken}`,
                            "Content-Type": "application/json",
                        });

                        if (typeof documentOrOptions === "string" || "kind" in documentOrOptions) {
                            return await originalRequest(documentOrOptions, variables, headers)
                        } else {
                            return await originalRequest(documentOrOptions as RequestOptions<T, V>);
                        }
                    } catch (refreshError) {
                        logOut({ input: { userId: user?.id! } })
                    }
                }
                throw error;
            }
        };

        setAccessClient(client)
    }

    useEffect(() => {
        initializeClient()
    }, [])

    useEffect(() => {
        if (!refreshToken || !accessToken) return

        initializeAccessClient()
    }, [refreshToken, accessToken])

    return <ClientContext.Provider value={{ client, accessClient }}>{children}</ClientContext.Provider>
}

export const useClient = () => useContext(ClientContext)