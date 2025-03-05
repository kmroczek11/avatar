import { createContext, useContext, useEffect, useState } from "react"
import { initializeSocket } from "../socket"
import { Socket } from "socket.io-client"
import { useAuth } from "../../auth/components/AuthProvider"

interface SocketProviderProps {
    socket: Socket | null
}

const SocketContext = createContext<SocketProviderProps>({ socket: null })

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const [socket, setSocket] = useState<Socket | null>(null)
    const { accessToken } = useAuth()

    useEffect(() => {
        const connectSocket = async () => {
            const newSocket = await initializeSocket(accessToken)
            setSocket(newSocket)
        }

        connectSocket()

        return () => {
            socket?.disconnect()
        }
    }, [accessToken])

    return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>
}

export const useSocket = () => useContext(SocketContext)