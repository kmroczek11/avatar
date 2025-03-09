import axios from "axios";
import { io, Socket } from "socket.io-client";
import { MinimalUser } from "../../generated/graphql";
import { Chat } from "./models/Chat";
import { Message } from "./models/Message";

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

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:5000"

let socket: Socket<ServerToClientEvents, ClientToServerEvents> | null = null

export const initializeSocket = async (accessToken: string | null): Promise<Socket | null> => {
    if (socket) return socket

    if (!accessToken) {
        console.error("No access token available, cannot connect to socket.")
        return null
    }

    socket = io(URL, {
        autoConnect: false,
        transportOptions: {
            polling: {
                extraHeaders: {
                    Authorization: accessToken
                }
            }
        }
    })

    return socket
}

export { socket }
