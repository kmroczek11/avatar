import React, { useState, useEffect } from 'react';
import Messages from './components/Messages';
import ButtonsForm from './components/ButtonsForm';
import Paper from '@mui/material/Paper';
import ChatBar from './components/ChatBar';
import { MinimalUser } from '../../generated/graphql';
import { Message } from './models/Message';
import CircularProgress from '@mui/material/CircularProgress';
import { Chat } from './models/Chat';
import { useSocket } from './components/SocketProvider';

interface ChatBoxProps {
    index: number;
    friend: MinimalUser
    removeChatUser: (user: MinimalUser) => void
}

export default function ChatBox(props: ChatBoxProps) {
    const { index, friend, removeChatUser } = props
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null)
    const { socket } = useSocket()

    function createChat(friend: MinimalUser) {
        console.log('create chat')
        socket?.timeout(5000).emit('createChat', friend);
    }

    useEffect(() => {
        function onConnect() {
            console.log('connected')
            setIsLoading(true)
            createChat(friend)
        }

        function onChatsEvent(chats: Chat[]) {
            console.log('onChatsEvent')
            console.log(chats)
            setChat(chats[index]);
            setIsLoading(false)
        }

        function onNewMessageEvent(message: Message) {
            setMessages(previous => [...previous, message]);
        }

        socket?.on('connect', onConnect);
        socket?.on('chats', onChatsEvent);
        socket?.on('newMessage', onNewMessageEvent);

        return () => {
            socket?.off('connect', onConnect);
            socket?.off('chats', onChatsEvent);
            socket?.off('newMessage', onNewMessageEvent);
        };
    }, [socket]);

    return (
        <Paper
            elevation={3}
            sx={{
                width: 400,
                height: 500,
                display: "flex",
                flexDirection: "column",
                position: 'absolute',
                bottom: 0,
                right: 420 * (index + 1)
            }}>
            {isLoading ? <CircularProgress sx={{ display: "block", margin: "auto", color: '#000' }} />
                :
                <React.Fragment>
                    <ChatBar friend={friend} removeChatUser={removeChatUser} />
                    <Messages messages={messages} />
                    <ButtonsForm friend={friend} chat={chat!} />
                </React.Fragment>
            }
        </Paper>
    )
}