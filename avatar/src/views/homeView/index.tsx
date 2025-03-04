import * as React from 'react';
import Grid from '@mui/material/Grid2';
import AuthView from '../authView';
import { useAuth } from '../../components/auth/components/AuthProvider';
import Footer from '../../components/footer';
import MapView from '../mapView';
import FriendsBox from './components/FriendsBox';
import Dropdown from './components/Dropdown';
import ChatBox from '../../components/chat';
import { useState } from 'react';
import { MinimalUser } from '../../generated/graphql';

export default function HomeView() {
    const { user } = useAuth();
    const [chatUsers, setChatUsers] = useState<MinimalUser[]>([])

    const addChatUser = (user: MinimalUser) => {
        if (chatUsers.some((chatUser) => chatUser.id === user.id)) return

        if (chatUsers.length == 4) return

        setChatUsers([...chatUsers, user])
    }

    const removeChatUser = (user: MinimalUser) => {
        setChatUsers(chatUsers.filter((chatUser) => chatUser.id !== user.id));
    }

    return (
        user ?
            <Grid height="95vh" sx={{ position: 'relative' }}>
                <MapView />
                <Dropdown />
                <FriendsBox addChatUser={addChatUser} />
                {chatUsers.map((chatUser, i) => <ChatBox friend={chatUser} index={i} removeChatUser={removeChatUser} />)}
            </Grid> :
            <React.Fragment>
                <Grid height="62vh">
                    <AuthView />
                </Grid>
                <Footer />
            </React.Fragment>
    )
}