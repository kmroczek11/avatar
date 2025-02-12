import * as React from 'react';
import Grid from '@mui/material/Grid2';
import AuthView from '../authView';
import { useAuth } from '../../components/auth/components/AuthProvider';
import Footer from '../../components/footer';
import MapView from '../mapView';
import FriendsBox from './components/FriendsBox';
import Dropdown from './components/Dropdown';

export default function HomeView() {
    const { user } = useAuth();

    return (
        user ?
            <Grid height="95vh" sx={{ position: 'relative' }}>
                <Dropdown />
                <FriendsBox />
                <MapView />
            </Grid> :
            <React.Fragment>
                <Grid height="62vh">
                    <AuthView />
                </Grid>
                <Footer />
            </React.Fragment>
    )
}