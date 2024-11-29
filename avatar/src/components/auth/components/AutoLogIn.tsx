import { useState, useEffect } from "react";
import useAutoLogInUser from "../hooks/useAutoLogInUser";
import createAutoLogInUserClient from "../../../graphql/clients/autoLogInUserClient";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function AutoLogIn() {
    const [autoLoginUserError, setAutoLoginError] = useState<string>("");
    const [cookie, setCookie, removeCookie] = useCookies(['userId']);

    const { isLoading, error, data: accessToken, isFetching } = useQuery({
        queryKey: ['accessToken'],
        queryFn: () =>
            axios
                .get(`${process.env.REACT_APP_HOST}/auth/getAccessToken/${cookie.userId}`)
                .then((res) => {
                    return res.data
                }),
        enabled: cookie ? true : false
    })

    const { isAutoLogInUserLoading, autoLogIn } = useAutoLogInUser(
        createAutoLogInUserClient(accessToken),
        setAutoLoginError,
        (data) => { }
    );

    useEffect(() => {
        if (!cookie.userId || !accessToken) return

        autoLogIn({
            input: {
                userId: cookie.userId
            }
        })
    }, [cookie, accessToken])

    return null
}