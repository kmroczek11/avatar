import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import RegisterForm from './components/registerForm';
import LogInForm from './components/logInForm';

export default function AuthView() {
    const [active, setActive] = useState('logIn')

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
                {active == "logIn" ?
                    <LogInForm setActive={setActive} /> :
                    <RegisterForm setActive={setActive} />
                }
            </Grid>
        </React.Fragment>

    )
}