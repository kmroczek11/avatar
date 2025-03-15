import { useState, useEffect } from "react";
import useAutoLogInUser from "../hooks/useAutoLogInUser";
import { useCookies } from "react-cookie";
import { useClient } from "./ClientProvider";

export default function AutoLogIn() {
    const [autoLoginUserError, setAutoLoginError] = useState<string>("");
    const [cookies, setCookie, removeCookie] = useCookies(['userId']);
    const { client } = useClient()

    const { isAutoLogInUserLoading, autoLogIn } = useAutoLogInUser(
        client!,
        setAutoLoginError,
        (data) => {
            setCookie('userId', data.autoLogInUser.userId)
        }
    );

    useEffect(() => {
        if (!cookies.userId || !client) return

        autoLogIn({
            input: {
                userId: cookies.userId
            }
        })
    }, [client])

    return null
}