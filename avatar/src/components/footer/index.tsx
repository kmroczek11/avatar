import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Container = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    ...theme.typography.body2,
    color: theme.palette.primary.contrastText,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "35vh"
}));

export default function Footer() {
    return (
        <Container>
            Avatar © All Rights Reserved 2025
        </Container>
    )
}