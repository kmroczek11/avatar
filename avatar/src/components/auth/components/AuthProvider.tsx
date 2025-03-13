import React, { createContext, useContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, UseMutateFunction, useQuery } from "@tanstack/react-query";
import { Exact, LogOutUserInput, LogOutUserMutation, LogOutUserMutationVariables, useLogOutUserMutation, User, useRefreshTokenMutation } from "../../../generated/graphql";
import createAccessClient from "../../../graphql/clients/accessClient";

const AuthContext = createContext<{
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  getUserRefetch: <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>
  ) => Promise<QueryObserverResult<User, unknown>>;
  logOut: UseMutateFunction<LogOutUserMutation, Error, Exact<{ input: LogOutUserInput; }>, unknown>
}>({
  user: null,
  accessToken: null,
  refreshToken: null,
  getUserRefetch: async () => {
    throw new Error("getUserRefetch not implemented");
  },
  logOut: () => {
    throw new Error("logOut not implemented");
  },
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [cookies, setCookie, removeCookie] = useCookies(["userId"]);
  const [user, setUser] = useState<User | null>(null);

  const { refetch: getUserRefetch } = useQuery<User>({
    queryKey: ["user", cookies.userId],
    queryFn: async () => {
      if (!cookies.userId) throw new Error("No userId cookie found");
      const res = await axios.get(`${process.env.REACT_APP_HOST}/auth/getUser/${cookies.userId}`);
      setUser(res.data)
      return res.data;
    },
    enabled: !!cookies.userId,
  });

  const { data: accessToken } = useQuery<string>({
    queryKey: ["accessToken", cookies.userId],
    queryFn: async () => {
      if (!cookies.userId) throw new Error("No userId cookie found");
      const res = await axios.get(`${process.env.REACT_APP_HOST}/auth/getAccessToken/${cookies.userId}`);
      return res.data;
    },
    enabled: !!cookies.userId,
  });

  const { data: refreshToken } = useQuery<string>({
    queryKey: ["refreshToken", cookies.userId],
    queryFn: async () => {
      if (!cookies.userId) throw new Error("No userId cookie found");
      const res = await axios.get(`${process.env.REACT_APP_HOST}/auth/getRefreshToken/${cookies.userId}`);
      return res.data;
    },
    enabled: !!cookies.userId,
  });

  const { isLoading, mutate: logOut } = useLogOutUserMutation<Error>(
    createAccessClient(accessToken!,refreshToken!),
    {
      onError: (error: Error) => {
        let err: any = {};
        err.data = error;
      },
      onSuccess: (
        data: LogOutUserMutation,
        _variables: LogOutUserMutationVariables,
        _context: unknown
      ) => {
        removeCookie('userId')
        setUser(null)
      },
    }
  )

  return (
    <AuthContext.Provider value={{
      user: user ?? null,
      accessToken: accessToken ?? null,
      refreshToken: refreshToken ?? null,
      getUserRefetch,
      logOut
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);