import { createContext, useContext, useEffect, useState } from "react";
import User from "../models/user";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AuthContext = createContext<{
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}>({
    user: null,
    setUser: () => { },
});

interface AuthProviderProps {
    children: React.ReactNode;
}

export default function AuthProvider(props: AuthProviderProps) {
    const { children } = props
    const [user, setUser] = useState<User | null>(null);
    const [cookies, setCookie, removeCookie] = useCookies(['userId']);

    const { isLoading: isGetUserLoading, error: userGetError, data, isFetching: isGetUserFetching } = useQuery({
        queryKey: ['user'],
        queryFn: () =>
            axios
                .get(`${process.env.REACT_APP_HOST}/auth/getUser/${cookies.userId}`)
                .then((res) => setUser(res.data)),
        enabled: cookies.userId ? true : false
    })

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);