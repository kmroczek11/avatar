import * as React from 'react';
import Grid from '@mui/material/Grid2';
import AuthView from '../authView';
import { useAuth } from '../../components/auth/components/AuthProvider';
import Footer from '../../components/footer';
import MapView from '../mapView';

export default function HomeView() {
    const { user } = useAuth();

    return (
        user ?
            <Grid container height="95vh">
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