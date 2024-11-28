import React from 'react';
import Grid from '@mui/material/Grid2';
import RegisterForm from './components/registerForm';

export default function RegisterView() {
    return (
        <React.Fragment>
            <Grid size={6}>Photo</Grid>
            <Grid
                size={6}
                sx={{ backgroundColor: 'secondary.main' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <RegisterForm />
            </Grid>
        </React.Fragment>

    )
}