import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import RegisterForm from './components/RegisterForm';
import LogInForm from './components/LogInForm';
import cover from "../../assets/authView/cover.png";
import { ImageBlock } from '../../components/lib';
import Box from '@mui/material/Box';

export default function AuthView() {
    const [active, setActive] = useState('logIn')

    return (
        <Grid container height="100%">
            <Grid size={{ xs: 0, md: 6 }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        overflow: "hidden",
                        position: "relative",
                    }}
                >
                    <Box
                        component="img"
                        src={cover}
                        alt="Full height"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Box>
            </Grid>
            <Grid
                size={{ xs: 12, md: 6 }}
                sx={{ backgroundColor: 'secondary.main' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                py={5}
            >
                {active == "logIn" ?
                    <LogInForm setActive={setActive} /> :
                    <RegisterForm setActive={setActive} />
                }
            </Grid>
        </Grid>

    )
}