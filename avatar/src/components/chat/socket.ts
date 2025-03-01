import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { io, Socket } from "socket.io-client";

interface ServerToClientEvents {
    newMessage: (message: string) => void
}

interface ClientToServerEvents {
    sendMessage: (message: string, callback: () => void) => void;
}

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:5000';

const getAccessToken = async () => {
    const userId = localStorage.getItem('userId')

    if (!userId) return

    try {
        const response = await axios.get(
            `${process.env.REACT_APP_HOST}/auth/getAccessToken/${userId}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching access token:", error);
        throw error;
    }
};

const accessToken = getAccessToken()

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(URL, {
    autoConnect: true,
    transportOptions: {
        polling: {
            extraHeaders: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    }
});