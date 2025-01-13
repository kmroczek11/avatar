import { createContext, useContext, useEffect, useState } from "react";
import User from "../models/user";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AuthContext = createContext<{
    user: User | null;
    accessToken: string | null;
    getUserRefetch: any;
    getAccessTokenRefetch: any;
}>({
    user: null,
    accessToken: null,
    getUserRefetch: () => { },
    getAccessTokenRefetch: () => { }
});

interface AuthProviderProps {
    children: React.ReactNode;
}

export default function AuthProvider(props: AuthProviderProps) {
    const { children } = props
    const [cookies] = useCookies(['userId']);

    const { isLoading: isGetUserLoading, error: userGetError, data: user, isFetching: isGetUserFetching, refetch: getUserRefetch } = useQuery({
        queryKey: ['userId'],
        queryFn: () =>
            axios
                .get(`${process.env.REACT_APP_HOST}/auth/getUser/${cookies.userId}`)
                .then((res) => res.data)
    })

    const { isLoading: isGetAccessTokenLoading, error: accessTokenGetError, data: accessToken, isFetching: isGetAccessTokenFetching, refetch: getAccessTokenRefetch } = useQuery({
        queryKey: ['accessToken'],
        queryFn: () =>
            axios
                .get(`${process.env.REACT_APP_HOST}/auth/getAccessToken/${cookies.userId}`)
                .then((res) => res.data)
    })

    return (
        <AuthContext.Provider
            value={{
                user,
                accessToken,
                getUserRefetch,
                getAccessTokenRefetch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);