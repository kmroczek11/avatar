import { createContext, useContext, useEffect, useState } from "react"
import { initializeSocket } from "../socket"
import { Socket } from "socket.io-client"

interface SocketProviderProps {
    socket: Socket | null
}

const SocketContext = createContext<SocketProviderProps>({ socket: null })

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const [socket, setSocket] = useState<Socket | null>(null)

    useEffect(() => {
        const connectSocket = async () => {
            const newSocket = await initializeSocket()
            setSocket(newSocket)
        }

        connectSocket()

        return () => {
            socket?.disconnect()
        }
    }, [])

    return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>
}

export const useSocket = () => useContext(SocketContext)