import Grid from '@mui/material/Grid2';
import RegisterForm from './components/registerForm';

export default function RegisterView() {
    return (
        <Grid container height="60vh">
            <Grid size={6}>Photo</Grid>
            <Grid
                size={6}
                sx={{ backgroundColor: 'secondary.main' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <RegisterForm/>
            </Grid>
        </Grid>
    )
}