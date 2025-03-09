import React, { useState, useEffect } from "react";
import Messages from "./components/Messages";
import ButtonsForm from "./components/ButtonsForm";
import Paper from "@mui/material/Paper";
import ChatBar from "./components/ChatBar";
import { MinimalUser } from "../../generated/graphql";
import { Message } from "./models/Message";
import CircularProgress from "@mui/material/CircularProgress";
import { Chat } from "./models/Chat";
import { useSocket } from "./components/SocketProvider";

interface ChatBoxProps {
  index: number;
  friend: MinimalUser;
  removeChatUser: (user: MinimalUser) => void;
}

export default function ChatBox(props: ChatBoxProps) {
  const { index, friend, removeChatUser } = props
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [chat, setChat] = useState<Chat | null>(null)
  const [hasCreatedChat, setHasCreatedChat] = useState(false)
  const { socket } = useSocket()

  function createChat(friend: MinimalUser) {
    socket?.timeout(5000).emit("createChat", friend)
  }

  useEffect(() => {
    if (!socket || !friend || hasCreatedChat) return

    socket.connect()
    setIsLoading(true)
    createChat(friend)
    setHasCreatedChat(true)
  }, [socket, friend, hasCreatedChat])

  useEffect(() => {
    if (!socket) return

    function onConnect() {
      console.log("connected")
    }

    function onChatsEvent(chats: Chat[]) {
      if (!friend) return

      const foundChat = chats.find((chat) =>
        chat.users.some((user) => user.id === friend.id)
      )

      if (foundChat) {
        setChat(foundChat)
      }

      setIsLoading(false)
    }

    function onMessagesEvent(messages: Message[]) {
      if (chat?.id === messages[0]?.chatId) {
        setMessages(messages)
      }
    }

    function onNewMessageEvent(message: Message) {
      if (chat?.id === message.chatId) {
        setMessages((previous) => [...previous, message])
      }
    }

    socket.on("connect", onConnect)
    socket.on("chats", onChatsEvent)
    socket.on("messages", onMessagesEvent)
    socket.on("newMessage", onNewMessageEvent)

    return () => {
      socket.off("connect", onConnect)
      socket.off("chats", onChatsEvent)
      socket.off("messages", onMessagesEvent)
      socket.off("newMessage", onNewMessageEvent)
    }
  }, [socket, chat, friend])

  useEffect(() => {
    if (!socket || !friend || !chat) return

    socket.emit("joinChat", friend.id, chat.id)

    return () => {
      socket.emit("leaveChat", chat.id)
    }
  }, [socket, friend, chat])

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
        right: 420 * (index + 1),
      }}
    >
      {isLoading ? (
        <CircularProgress sx={{ display: "block", margin: "auto", color: "#000" }} />
      ) : (
        <>
          <ChatBar friend={friend} removeChatUser={removeChatUser} />
          {chat ? (
            <>
              <Messages messages={messages} />
              <ButtonsForm friend={friend} chat={chat} />
            </>
          ) : (
            <div>Nie znaleziono czatu</div>
          )}
        </>
      )}
    </Paper>
  )
}