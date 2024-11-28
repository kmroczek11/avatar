import { useState, useEffect } from "react";
import useAutoLogInUser from "../hooks/useAutoLogInUser";
import createAutoLogInUserClient from "../../../graphql/clients/autoLogInUserClient";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function AutoLogIn() {
    const [autoLoginUserError, setAutoLoginError] = useState<string>("");

    // const { isLoading, error, data: accessToken, isFetching } = useQuery({
    //     queryKey: ['accessToken'],
    //     queryFn: () =>
    //         axios
    //             .get(`${process.env.REACT_APP_HOST}/auth/getAccessToken/${localStorage.getItem('userId')}}`)
    //             .then((res) => {
    //                 console.log(res.data)
    //                 return res.data
    //             }),
    // })

    const { isAutoLogInUserLoading, autoLogIn } = useAutoLogInUser(
        createAutoLogInUserClient(),
        setAutoLoginError,
        (data) => {}
    );

    useEffect(() => autoLogIn({
        input: {
            userId: localStorage.getItem('userId')!
        }
    }), [])

    return null
}