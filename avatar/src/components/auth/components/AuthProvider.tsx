import { createContext, useContext } from "react";
import User from "../models/user";
import { useCookies } from "react-cookie";
import { useQuery,QueryObserverResult, RefetchOptions, RefetchQueryFilters  } from "@tanstack/react-query";
import axios from "axios";

const AuthContext = createContext<{
    user: User | null;
    accessToken: string | null;
    getUserRefetch: <TPageData>(
        options?: RefetchOptions & RefetchQueryFilters<TPageData>
    ) => Promise<QueryObserverResult<User, unknown>>;
    getAccessTokenRefetch: <TPageData>(
        options?: RefetchOptions & RefetchQueryFilters<TPageData>
    ) => Promise<QueryObserverResult<string, unknown>>;
}>({
    user: null,
    accessToken: null,
    getUserRefetch: async () => {
        throw new Error("getUserRefetch not implemented");
    },
    getAccessTokenRefetch: async () => {
        throw new Error("getAccessTokenRefetch not implemented");
    },
});

interface AuthProviderProps {
    children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
    const [cookies] = useCookies(["userId"]);

    const { data: user, refetch: getUserRefetch } = useQuery({
        queryKey: ["user", cookies.userId],
        queryFn: () =>
            cookies.userId
                ? axios
                    .get(`${process.env.REACT_APP_HOST}/auth/getUser/${cookies.userId}`)
                    .then((res) => res.data)
                : Promise.reject("No userId cookie found"),
        enabled: !!cookies.userId,
    });

    const { data: accessToken, refetch: getAccessTokenRefetch } = useQuery({
        queryKey: ["accessToken", cookies.userId],
        queryFn: () =>
            cookies.userId
                ? axios
                    .get(`${process.env.REACT_APP_HOST}/auth/getAccessToken/${cookies.userId}`)
                    .then((res) => res.data)
                : Promise.reject("No userId cookie found"),
        enabled: !!cookies.userId,
    });

    return (
        <AuthContext.Provider value={{
            user: user || null,
            accessToken: accessToken || null,
            getUserRefetch,
            getAccessTokenRefetch,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);