import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import ConnectionState from './components/ConnectionState';
import Messages from './components/Messages';
import ButtonsForm from './components/ButtonsForm';
import Paper from '@mui/material/Paper';
import ChatBar from './components/ChatBar';
import { MinimalUser } from '../../generated/graphql';

interface ChatBoxProps {
    index: number;
    user: MinimalUser
    removeChatUser: (user: MinimalUser) => void
}

export default function ChatBox(props: ChatBoxProps) {
    const { index, user, removeChatUser } = props
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        function onNewMessageEvent(message: string) {
            setMessages(previous => [...previous, message]);
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('newMessage', onNewMessageEvent);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('newMessage', onNewMessageEvent);
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
            <ChatBar user={user} removeChatUser={removeChatUser} />
            <Messages messages={messages} />
            <ButtonsForm />
        </Paper>
    )
}