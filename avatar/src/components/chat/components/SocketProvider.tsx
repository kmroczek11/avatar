import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "../../auth/components/AuthProvider"
import { io, Socket } from "socket.io-client";
import { useRefreshTokenMutation } from "../../../generated/graphql";
import createClient from "../../../graphql/clients/client";
import { MinimalUser } from "../../../generated/graphql";
import { Chat } from "../models/Chat";
import { Message } from "../models/Message";

interface SocketProviderProps {
    socket: Socket | null
}

interface ServerToClientEvents {
    newMessage: (message: Message) => void
    chats: (chats: Chat[]) => void
    messages: (messages: Message[]) => void
}

interface ClientToServerEvents {
    sendMessage: (message: Message, callback?: (err: any, response: any) => void) => void
    createChat: (friend: MinimalUser, callback?: (err: any, response: any) => void) => void
    joinChat: (friendId: string, chatId: string, callback?: (err: any, response: any) => void) => void
    leaveChat: (chatId: string, callback?: (err: any, response: any) => void) => void
}

const SocketContext = createContext<SocketProviderProps>({ socket: null })

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:5000"

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents> | null>(null)
    const { accessToken, refreshToken } = useAuth()

    const refreshAccessToken = useRefreshTokenMutation(createClient());

    function isAccessTokenExpired(accessToken: string | null): boolean {
        if (!accessToken) return true

        try {
            const payload = JSON.parse(atob(accessToken.split('.')[1]))
            return payload.exp * 1000 < Date.now()
        } catch (error) {
            console.error("Error decoding token:", error);
            return true
        }
    };

    async function initializeSocket() {
        let newAccessToken = accessToken

        if (!accessToken || isAccessTokenExpired(accessToken)) {
            console.warn("Access token expired, attempting to refresh...")

            if (!refreshToken) {
                console.error("No refresh token available, cannot connect to socket.")
                return null;
            }

            try {
                const refreshResponse = await refreshAccessToken.mutateAsync({ input: { refreshToken: refreshToken! } });

                newAccessToken = refreshResponse?.refreshToken.accessToken;

                if (!newAccessToken) {
                    console.error("Failed to refresh token, cannot connect to socket.")
                    return null
                }
            } catch (error) {
                console.error("Error refreshing token:", error)
                return null
            }
        }

        setSocket(io(URL, {
            autoConnect: true,
            transportOptions: {
                polling: {
                    extraHeaders: {
                        Authorization: newAccessToken
                    }
                }
            }
        }))
    }

    useEffect(() => {
        if (!socket) return

        function onConnect() {
            console.log("connected")
        }

        async function onConnectError(err: Error) {
            if (!socket) return

            if (err.message === "Unauthorized") {
                console.warn("Socket authorization failed, refreshing token...");

                const newToken = await refreshAccessToken.mutateAsync({ input: { refreshToken: refreshToken! } });

                if (newToken) {
                    socket.auth = { token: `Bearer ${newToken.refreshToken.accessToken}` };
                    socket.connect(); // Reconnect with new token
                } else {
                    console.error("Re-authentication failed, disconnecting socket.");
                    socket.disconnect();
                }
            }
        }

        socket.on("connect", onConnect)
        socket.on("connect_error", onConnectError);

        return () => {
            socket.off("connect", onConnect)
            socket.off("connect_error", onConnectError);
        }
    }, [socket])

    useEffect(() => {
        initializeSocket()

        return () => {
            socket?.disconnect()
        }
    }, [accessToken, refreshToken])

    return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>
}

export const useSocket = () => useContext(SocketContext)