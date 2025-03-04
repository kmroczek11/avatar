import React, { useState, useEffect } from 'react';
import { initializeSocket, socket } from './socket';
import ConnectionState from './components/ConnectionState';
import Messages from './components/Messages';
import ButtonsForm from './components/ButtonsForm';
import Paper from '@mui/material/Paper';
import ChatBar from './components/ChatBar';
import { Friend, MinimalUser } from '../../generated/graphql';
import { Message } from './models/Message';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuth } from '../auth/components/AuthProvider';
import { Chat } from './models/Chat';

interface ChatBoxProps {
    index: number;
    friend: MinimalUser
    removeChatUser: (user: MinimalUser) => void
}

export default function ChatBox(props: ChatBoxProps) {
    const { index, friend, removeChatUser } = props
    const [isConnected, setIsConnected] = useState(socket?.connected);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null)

    function createChat(friend: MinimalUser) {
        console.log('create chat')
        socket?.timeout(5000).emit('createChat', friend, (err: any, response: any) => {
            setIsLoading(false);
        
            if (err) {
                console.error("Chat creation timeout or error:", err);
                return;
            }
        
            console.log("Chat created successfully:", response);
        });
    }

    useEffect(() => {
        initializeSocket()
        setIsLoading(true)
        createChat(friend)
    }, [])

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        function onChatsEvent(chats: Chat[]) {
            setChat(chats[0]);
        }

        socket?.on('connect', onConnect);
        socket?.on('disconnect', onDisconnect);
        socket?.on('chats', onChatsEvent);

        return () => {
            socket?.off('connect', onConnect);
            socket?.off('disconnect', onDisconnect);
            socket?.off('chats', onChatsEvent);
        };
    }, []);

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