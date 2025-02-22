import React, { createContext, useContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, useQuery } from "@tanstack/react-query";
import { useRefreshTokenMutation } from "../../../generated/graphql";
import createAccessClient from "../../../graphql/clients/accessClient";
import User from "../models/user";

const AuthContext = createContext<{
  user: User | null;
  accessToken: string | null;
  getUserRefetch: <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>
  ) => Promise<QueryObserverResult<User, unknown>>;
}>({
  user: null,
  accessToken: null,
  getUserRefetch: async () => {
    throw new Error("getUserRefetch not implemented");
  }
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [cookies] = useCookies(["userId"]);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const { data: userData, refetch: getUserRefetch } = useQuery<User>({
    queryKey: ["user", cookies.userId],
    queryFn: async () => {
      if (!cookies.userId) throw new Error("No userId cookie found");
      const res = await axios.get(`${process.env.REACT_APP_HOST}/auth/getUser/${cookies.userId}`);
      return res.data;
    },
    enabled: !!cookies.userId,
  });

  const { data: accessTokenData } = useQuery<string>({
    queryKey: ["accessToken", cookies.userId],
    queryFn: async () => {
      if (!cookies.userId) throw new Error("No userId cookie found");
      const res = await axios.get(`${process.env.REACT_APP_HOST}/auth/getAccessToken/${cookies.userId}`);
      return res.data;
    },
    enabled: !!cookies.userId,
  });

  const { data: refreshTokenData } = useQuery<string>({
    queryKey: ["refreshToken", cookies.userId],
    queryFn: async () => {
      if (!cookies.userId) throw new Error("No userId cookie found");
      const res = await axios.get(`${process.env.REACT_APP_HOST}/auth/getRefreshToken/${cookies.userId}`);
      return res.data;
    },
    enabled: !!cookies.userId,
  });

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
    if (accessTokenData) {
      setAccessToken(accessTokenData);
    }
    if (refreshTokenData) {
      setRefreshToken(refreshTokenData);
    }
  }, [userData, accessTokenData, refreshTokenData]);

  const { mutate: refreshAccessToken } = useRefreshTokenMutation(createAccessClient(accessToken!), {
    onSuccess: (data) => {
      setAccessToken(data.refreshToken.accessToken);
    },
    onError: (error) => {
      console.error("Error refreshing token:", error);
    }
  });

  const isTokenExpired = (token: string) => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      return currentTime > payload.exp;
    } catch (error) {
      console.error('Error decoding token:', error);
      return true;
    }
  };

  const refreshTokenAndFetch = async () => {
    if (isTokenExpired(accessToken!)) {
      try {
        await refreshAccessToken({
          input: { refreshToken: refreshToken! }
        });
      } catch (error) {
        console.error("Failed to refresh access token:", error);
      }
    }
  };

  useEffect(() => {
    if (accessToken && refreshToken) {
      refreshTokenAndFetch();
    }
  }, [accessToken, refreshToken]);

  return (
    <AuthContext.Provider value={{
      user: user ?? null,
      accessToken: accessToken ?? null,
      getUserRefetch
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);