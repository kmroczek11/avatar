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

let socket: Socket | null = null

const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    
    if (parts.length === 2) {
        return parts.pop()!.split(';').shift() || null;
    }

    return null;
};

const getAccessToken = async () => {
    const userId = getCookie('userId')

    if (!userId) return null;

    try {
        const response = await axios.get(
            `${process.env.REACT_APP_HOST}/auth/getAccessToken/${userId}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching access token:", error);
        return null;
    }
};

export const initializeSocket = async () => {
    const accessToken = await getAccessToken();

    if (!accessToken) {
        console.error("No access token available, cannot connect to socket.");
        return;
    }

    const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(URL, {
        autoConnect: true,
        transportOptions: {
            polling: {
                extraHeaders: {
                    Authorization: accessToken
                }
            }
        }
    });

    return socket;
};

export { socket }