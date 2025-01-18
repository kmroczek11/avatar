import { useState, useEffect } from "react";
import useAutoLogInUser from "../hooks/useAutoLogInUser";
import createAutoLogInUserClient from "../../../graphql/clients/autoLogInUserClient";
import { useCookies } from "react-cookie";
import { useInterval } from 'usehooks-ts'
import { useAuth } from "./AuthProvider";

export default function AutoLogIn() {
    const [autoLoginUserError, setAutoLoginError] = useState<string>("");
    const [cookies, setCookie, removeCookie] = useCookies(['userId']);

    const { isAutoLogInUserLoading, autoLogIn } = useAutoLogInUser(
        createAutoLogInUserClient(),
        setAutoLoginError,
        (data) => { 
            setCookie('userId', data.autoLogInUser.userId)
        }
    );

    useInterval(
        () => {
            autoLogIn({
                input: {
                    userId: cookies.userId
                }
            })
        },
        cookies.userId ? Number(process.env.REACT_APP_ACCESS_TOKEN_EXPIRATION) : null
    )

    return null
}