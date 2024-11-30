import Grid from '@mui/material/Grid2';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import RegisterView from '../registerView';
import { useCookies } from 'react-cookie';

export default function HomeView() {
    const [cookies, setCookie, removeCookie] = useCookies(['userId']);

    const { isLoading, error, data: user, isFetching } = useQuery({
        queryKey: ['user'],
        queryFn: () =>
            axios
                .get(`${process.env.REACT_APP_HOST}/auth/getUser/${cookies.userId}`)
                .then((res) => {
                    return res.data
                }),
        enabled: cookies.userId ? true : false
    })

    return (
        <Grid container height="62vh">
            {cookies.userId ? null : <RegisterView />}
        </Grid>
    )
}