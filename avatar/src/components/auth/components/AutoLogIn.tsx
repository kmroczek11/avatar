import { useState, useEffect } from "react";
import useAutoLogInUser from "../hooks/useAutoLogInUser";
import createAutoLogInUserClient from "../../../graphql/clients/autoLogInUserClient";
import { useCookies } from "react-cookie";

export default function AutoLogIn() {
    const [autoLoginUserError, setAutoLoginError] = useState<string>("");
    const [cookie, setCookie, removeCookie] = useCookies(['userId']);

    const { isAutoLogInUserLoading, autoLogIn } = useAutoLogInUser(
        createAutoLogInUserClient(),
        setAutoLoginError,
        (data) => { }
    );

    useEffect(() => {
        if (!cookie.userId) return

        autoLogIn({
            input: {
                userId: cookie.userId
            }
        })
    }, [cookie])

    return null
}