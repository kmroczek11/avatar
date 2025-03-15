import { createContext, useContext } from "react"
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface TokensProviderProps {
    refreshToken: string | null;
    accessToken: string | null;
}

const TokensContext = createContext<TokensProviderProps>({ refreshToken: null, accessToken: null })

export const TokensProvider = ({ children }: { children: React.ReactNode }) => {
    const [cookies, setCookie, removeCookie] = useCookies(["userId"])

    const { data: accessToken } = useQuery<string>({
        queryKey: ["accessToken", cookies.userId],
        queryFn: async () => {
            if (!cookies.userId) throw new Error("No userId cookie found");
            const res = await axios.get(`${process.env.REACT_APP_HOST}/auth/getAccessToken/${cookies.userId}`);
            return res.data;
        },
        enabled: !!cookies.userId,
    })

    const { data: refreshToken } = useQuery<string>({
        queryKey: ["refreshToken", cookies.userId],
        queryFn: async () => {
            if (!cookies.userId) throw new Error("No userId cookie found");
            const res = await axios.get(`${process.env.REACT_APP_HOST}/auth/getRefreshToken/${cookies.userId}`);
            return res.data;
        },
        enabled: !!cookies.userId,
    })

    return (
        <TokensContext.Provider value={{
            accessToken: accessToken ?? null,
            refreshToken: refreshToken ?? null,
        }}>
            {children}
        </TokensContext.Provider>
    )
}

export const useTokens = () => useContext(TokensContext)