import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    ...theme.typography.body2,
    color: theme.palette.primary.contrastText,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}));

export default function Footer() {
    return (
        <Grid container height="40vh" >
            <Grid size={12}>
                <Item>Avatar © All Rights Reserved 2024</Item>
            </Grid>
        </Grid>
    )
}