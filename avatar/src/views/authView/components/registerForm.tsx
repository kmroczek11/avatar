import { useState } from "react"
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import { ColorButton, CustomAlert } from "../../../components/lib";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import Typography from "@mui/material/Typography";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import useRegisterUser from "../../../components/auth/hooks/useRegisterUser";
import createRegisterUserClient from "../../../graphql/clients/registerUserClient";
import { useCookies } from "react-cookie";
import { useAuth } from "../../../components/auth/components/AuthProvider";

YupPassword(Yup); // extend yup

interface RegisterFormProps {
    setActive: (name: string) => void;
}

const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: ""
};

const userExistsMessage = "Użytkownik o podanym adresie e-mail już istnieje.";

export default function RegisterForm(props: RegisterFormProps) {
    const { setActive } = props;
    const [registerError, setRegisterError] = useState<string>("");
    const [cookie, setCookie, removeCookie] = useCookies(['userId']);
    const { getUserRefetch, getAccessTokenRefetch } = useAuth();

    const { register } = useRegisterUser(
        createRegisterUserClient(),
        setRegisterError,
        (data) => {
            setCookie('userId', data.registerUser.userId);
            getUserRefetch()
            getAccessTokenRefetch()
        }
    );

    return (
        <Formik
            initialValues={defaultValues}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);

                const { firstName, lastName, email, password, phoneNumber } = values;

                register({
                    input: {
                        firstName,
                        lastName,
                        email,
                        password,
                        phoneNumber: `+${phoneNumber}`,
                    },
                });
            }}
            validationSchema={Yup.object().shape({
                firstName: Yup.string().required("Wymagane"),
                lastName: Yup.string().required("Wymagane"),
                email: Yup.string()
                    .email("Nieprawidłowy email")
                    .required("Wymagane"),
                password: Yup.string()
                    .min(8, "Hasło musi się składać z minimum 8 znaków")
                    .minUppercase(1, "Hasło musi zawierać minimum 1 dużą literę")
                    .minSymbols(1, "Hasło musi zawierać minimum 1 znak specjalny")
                    .minNumbers(1, "Hasło musi zawierać minimum 1 cyfrę")
                    .required("Wymagane"),
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
                                    id="firstname-input"
                                    name="firstName"
                                    label="Imię"
                                    type="text"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={
                                        errors.firstName &&
                                        touched.firstName &&
                                        errors.firstName
                                    }
                                    error={
                                        errors.firstName && touched.firstName ? true : false
                                    }
                                    required
                                />
                            </Grid>
                            <Grid>
                                <TextField
                                    id="lastname-input"
                                    name="lastName"
                                    label="Nazwisko"
                                    type="text"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={
                                        errors.lastName && touched.lastName && errors.lastName
                                    }
                                    error={errors.lastName && touched.lastName ? true : false}
                                    required
                                />
                            </Grid>
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
                            <Grid>
                                <PhoneInput
                                    inputProps={{
                                        variant: "standard",
                                        name: "phoneNumber",
                                        required: true,
                                    }}
                                    inputStyle={{
                                        width: "294px",
                                        height: "63.66px"
                                    }}
                                    specialLabel="Numer telefonu"
                                    country={"pl"}
                                    value={values.phoneNumber}
                                    onChange={(phone) => (values.phoneNumber = phone)}
                                    onBlur={handleBlur}
                                    isValid={(value) => {
                                        if (value.length > 7) {
                                            return true;
                                        } else {
                                            return "Nieprawidłowy numer telefonu";
                                        }
                                    }}
                                    onlyCountries={["pl", "de", "gb"]}
                                    localization={{
                                        pl: "Polska",
                                        de: "Niemcy",
                                        gb: "Wielka Brytania",
                                    }}
                                />
                            </Grid>
                            <Grid>
                                <Typography
                                    variant="body2"
                                    fontWeight="bold"
                                    align="center"
                                    gutterBottom
                                >
                                    * Hasło musi się składać z min. 8 znaków,
                                    zawierać dużą literę oraz znak specjalny (!@# itp.)
                                </Typography>
                            </Grid>
                            {registerError === "User already exists" ? (
                                <CustomAlert severity="error" msg={userExistsMessage} />
                            ) : (
                                registerError && (
                                    <CustomAlert severity="error" msg="Nieoczekiwany błąd" />
                                )
                            )}
                            <ColorButton
                                variant="contained"
                                type="submit"
                                sx={{ my: 2 }}
                                disabled={isSubmitting}
                            >
                                Zarejestruj
                            </ColorButton>
                            <Button
                                variant="text"
                                sx={{ color: "#000", textTransform: "none" }}
                                onClick={() => setActive("logIn")}
                            >
                                Masz już konto? Zaloguj się
                            </Button>
                        </Grid>
                    </Form>
                );
            }}
        </Formik>
    )
}