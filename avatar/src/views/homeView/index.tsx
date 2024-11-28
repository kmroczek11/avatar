import Grid from '@mui/material/Grid2';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import RegisterView from '../registerView';

export default function HomeView() {
    const { isLoading, error, data: user, isFetching } = useQuery({
        queryKey: ['user'],
        queryFn: () =>
            axios
                .get(`${process.env.REACT_APP_HOST}/auth/getUser/${localStorage.getItem('userId')}}`)
                .then((res) => {
                    return res.data
                }),
    })

    return (
        <Grid container height="60vh">
            {user ? null : <RegisterView />}
        </Grid>
    )
}