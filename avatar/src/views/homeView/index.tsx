import * as React from 'react';
import Grid from '@mui/material/Grid2';
import AuthView from '../authView';
import { useAuth } from '../../components/auth/components/AuthProvider';
import Footer from '../../components/footer';
import MapView from '../mapView';
import Chat from '../../components/chat';
import SearchBar from './components/SearchBar';
import FriendsBox from './components/FriendsBox';

export default function HomeView() {
    const { user } = useAuth();

    return (
        user ?
            <Grid container height="95vh" sx={{ position: 'relative' }}>
                <SearchBar />
                <FriendsBox />
                <MapView />
            </Grid> :
            <React.Fragment>
                <Grid container height="62vh">
                    <AuthView />
                </Grid>
                <Footer />
            </React.Fragment>
    )
}