import { useState, useEffect } from "react";
import useAutoLogInUser from "../hooks/useAutoLogInUser";
import createClient from "../../../graphql/clients/client";
import { useCookies } from "react-cookie";

export default function AutoLogIn() {
    const [autoLoginUserError, setAutoLoginError] = useState<string>("");
    const [cookies, setCookie, removeCookie] = useCookies(['userId']);

    const { isAutoLogInUserLoading, autoLogIn } = useAutoLogInUser(
        createClient(),
        setAutoLoginError,
        (data) => {
            setCookie('userId', data.autoLogInUser.userId)
        }
    );

    useEffect(() => {
        if (!cookies.userId) return

        autoLogIn({
            input: {
                userId: cookies.userId
            }
        })
    }, [])

    return null
}