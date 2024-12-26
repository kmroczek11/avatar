import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import ConnectionState from './components/ConnectionState';
import Events from './components/Messages';
import ConnectionManager from './components/ConnectionManager';
import MyForm from './components/MyForm';

export default function Chat() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        function onNewMessageEvent(message:string) {
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
        <div className="Chat">
            <ConnectionState isConnected={isConnected} />
            <Events messages={messages} />
            <ConnectionManager />
            <MyForm />
        </div>
    )
}