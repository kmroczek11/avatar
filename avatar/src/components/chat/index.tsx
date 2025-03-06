import React, { useState, useEffect } from "react"
import Messages from "./components/Messages"
import ButtonsForm from "./components/ButtonsForm"
import Paper from "@mui/material/Paper"
import ChatBar from "./components/ChatBar"
import { MinimalUser } from "../../generated/graphql"
import { Message } from "./models/Message"
import CircularProgress from "@mui/material/CircularProgress"
import { Chat } from "./models/Chat"
import { useSocket } from "./components/SocketProvider"

interface ChatBoxProps {
    index: number
    friend: MinimalUser
    removeChatUser: (user: MinimalUser) => void
}

export default function ChatBox(props: ChatBoxProps) {
    const { index, friend, removeChatUser } = props
    const [messages, setMessages] = useState<Message[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [chat, setChat] = useState<Chat | null>(null)
    const { socket } = useSocket()

    function createChat(friend: MinimalUser) {
        console.log("create chat")
        socket?.timeout(5000).emit("createChat", friend)
    }

    useEffect(() => {
        if (!socket) return

        function onConnect() {
            console.log("connected")
        }

        function onChatsEvent(chats: Chat[]) {
            const foundChat = chats.find(chat =>
                chat.users.some(user => user.id === friend.id)
            )

            if (foundChat) setChat(foundChat)

            setIsLoading(false)
        }

        function onMessagesEvent(messages: Message[]) {
            if (chat?.id) {
                setMessages(prevMessages =>
                    chat.id === prevMessages[0]?.chat.id ? messages : prevMessages
                )
            }
        }

        function onNewMessageEvent(message: Message) {
            console.log("onNewMessage", message)
            if (chat?.id === message.chat.id) {
                setMessages(previous => [...previous, message])
            }
        }

        socket?.on("connect", onConnect)
        socket?.on("chats", onChatsEvent)
        socket?.on("messages", onMessagesEvent)
        socket?.on("newMessage", onNewMessageEvent)

        return () => {
            socket?.off("connect", onConnect)
            socket?.off("chats", onChatsEvent)
            socket?.off("messages", onMessagesEvent)
            socket?.off("newMessage", onNewMessageEvent)
        }
    }, [socket, chat])

    useEffect(() => {
        setIsLoading(true)
        socket?.connect()
        createChat(friend)

        return () => {
            if (socket) {
                console.log("Disconnecting socket")
                socket.disconnect()
            }
        }
    }, [friend, socket])

    useEffect(() => {
        if (!socket || !chat) return

        console.log(`Joining chat ${chat.id} with ${friend.id}`)

        socket.emit("joinChat", friend.id)

        return () => {
            console.log(`Leaving chat ${chat.id}`)
            socket.emit("leaveChat", friend.id)
        }
    }, [socket, chat])

    return (
        <Paper
            elevation={3}
            sx={{
                width: 400,
                height: 500,
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                bottom: 0,
                right: 420 * (index + 1)
            }}
        >
            {isLoading ? (
                <CircularProgress sx={{ display: "block", margin: "auto", color: "#000" }} />
            ) : (
                <>
                    <ChatBar friend={friend} removeChatUser={removeChatUser} />
                    <Messages messages={messages} />
                    <ButtonsForm friend={friend} chat={chat!} />
                </>
            )}
        </Paper>
    )
}