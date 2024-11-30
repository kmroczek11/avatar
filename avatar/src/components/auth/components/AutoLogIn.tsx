import { useState, useEffect } from "react";
import useAutoLogInUser from "../hooks/useAutoLogInUser";
import createAutoLogInUserClient from "../../../graphql/clients/autoLogInUserClient";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function AutoLogIn() {
    const [autoLoginUserError, setAutoLoginError] = useState<string>("");
    const [cookies, setCookie, removeCookie] = useCookies(['userId']);

    const { isLoading, error, data: accessToken, isFetching } = useQuery({
        queryKey: ['accessToken'],
        queryFn: () =>
            axios
                .get(`${process.env.REACT_APP_HOST}/auth/getAccessToken/${cookies.userId}`)
                .then((res) => {
                    return res.data
                }),
        enabled: cookies.userId ? true : false
    })

    const { isAutoLogInUserLoading, autoLogIn } = useAutoLogInUser(
        createAutoLogInUserClient(accessToken),
        setAutoLoginError,
        (data) => { }
    );

    useEffect(() => {
        if (!cookies.userId || !accessToken) return

        autoLogIn({
            input: {
                userId: cookies.userId
            }
        })
    }, [])

    return null
}