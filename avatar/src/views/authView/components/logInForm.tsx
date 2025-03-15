import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { ColorButton, CustomAlert } from "../../../components/lib";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { invalidEmailOrPasswordMessage } from "../../../translations/pl/errorMessages";
import useLogInUser from "../../../components/auth/hooks/useLogInUser";
import { useCookies } from "react-cookie";
import { useClient } from "../../../components/auth/components/ClientProvider";

interface LogInFormProps {
    setActive: (name: string) => void;
}

const defaultValues = {
    email: "",
    password: "",
};

export default function LogInForm(props: LogInFormProps) {
    const { setActive } = props;
    const [logInError, setLogInError] = useState<string>("")
    const [cookies, setCookie, removeCookie] = useCookies(['userId'])
    const { client } = useClient()

    const { isLogInLoading, logIn } = useLogInUser(
        client!,
        setLogInError,
        (data) => {
            setCookie('userId', data.logInUser.userId)
        }
    );

    return (
        <Formik
            initialValues={defaultValues}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);

                const { email, password } = values;

                logIn({
                    input: {
                        email: email,
                        password: password,
                    },
                });
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email("Nieprawidłowy email")
                    .required("Wymagane"),
                password: Yup.string().required("Wymagane"),
            })}
        >
            {(props) => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = props;
                return (
                    <Form onSubmit={handleSubmit}>
                        <Grid
                            container
                            alignItems="center"
                            justifyContent="center"
                            direction="column"
                            spacing={2}
                        >
                            <Grid>
                                <TextField
                                    id="email-input"
                                    name="email"
                                    label="E-mail"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={errors.email && touched.email && errors.email}
                                    error={errors.email && touched.email ? true : false}
                                    required
                                />
                            </Grid>
                            <Grid>
                                <TextField
                                    id="password-input"
                                    name="password"
                                    label="Hasło"
                                    type="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={
                                        errors.password && touched.password && errors.password
                                    }
                                    error={errors.password && touched.password ? true : false}
                                    required
                                />
                            </Grid>
                            {logInError === "Invalid email or password" ? (
                                <CustomAlert
                                    severity="error"
                                    msg={invalidEmailOrPasswordMessage}
                                />
                            ) : (
                                logInError && (
                                    <CustomAlert severity="error" msg="Nieoczekiwany błąd." />
                                )
                            )}
                            <ColorButton
                                variant="contained"
                                color="success"
                                type="submit"
                                sx={{ my: 2 }}
                            >
                                Zaloguj
                            </ColorButton>
                            {/* <Button
                    variant="text"
                    sx={{ color: "#000", textTransform: "none" }}
                    onClick={() => setOpenForgotPasswordDialog(true)}
                  >
                    Nie pamiętam hasła
                  </Button> */}
                            <Button
                                variant="text"
                                sx={{ color: "#000", textTransform: "none" }}
                                onClick={() => setActive("register")}
                            >
                                Nie masz jeszcze konta? Zarejestruj się
                            </Button>
                            {/* {openForgotPasswordDialog && (
                    <ForgotPasswordDialog
                      open={openForgotPasswordDialog}
                      handleClose={() => setOpenForgotPasswordDialog(false)}
                    />
                  )} */}
                        </Grid>
                    </Form>
                );
            }}
        </Formik>
    )
}