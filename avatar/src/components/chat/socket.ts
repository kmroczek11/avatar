import { io, Socket } from "socket.io-client";

interface ServerToClientEvents {
    newMessage:(message:string)=>void
}

interface ClientToServerEvents {
    sendMessage: (message: string, callback: () => void) => void;
}

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:5000';

// please note that the types are reversed
export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(URL, {
    autoConnect: false
});