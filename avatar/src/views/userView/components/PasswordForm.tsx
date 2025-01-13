import { useState } from "react";
import TextField from "@mui/material/TextField";
import { ColorButton, CustomAlert, LoadingScreen } from "../../../components/lib";
import Box from "@mui/material/Box";
import {
  useChangePasswordMutation,
  ChangePasswordMutation,
  ChangePasswordMutationVariables,
} from "../../../generated/graphql";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import createAccessClient from "../../../graphql/clients/accessClient";
import { useAuth } from "../../../components/auth/components/AuthProvider";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";

YupPassword(Yup); // extend yup

const defaultValues = {
  oldPassword: "",
  newPassword: "",
};

const successMessage = "Hasło zostało zmienione.";

const invalidPasswordMessage = "Nieprawidłowe hasło.";

export default function PasswordForm() {
  const { user, accessToken, getUserRefetch, getAccessTokenRefetch } = useAuth();
  const [changePasswordStatus, setChangePasswordStatus] = useState<string>("");
  const [cookies, setCookie, removeCookie] = useCookies(['userId']);

  const { isLoading, mutate } = useChangePasswordMutation<Error>(
    createAccessClient(accessToken!),
    {
      onError: (error: Error) => {
        let err: any = {};
        err.data = error;
        setChangePasswordStatus(err?.data?.response.errors[0].message);
      },
      onSuccess: (
        data: ChangePasswordMutation,
        _variables: ChangePasswordMutationVariables,
        _context: unknown
      ) => {
        setCookie('userId', data.changePassword.userId)
        setChangePasswordStatus("Success");
        getUserRefetch()
      },
    }
  );

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <Formik
      initialValues={defaultValues}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);

        const { oldPassword, newPassword } = values;

        getAccessTokenRefetch()

        mutate({
          input: {
            id: user?.id!,
            oldPassword: oldPassword,
            newPassword: newPassword,
          },
        });
      }}
      validationSchema={Yup.object().shape({
        oldPassword: Yup.string().required("Wymagane"),
        newPassword: Yup.string()
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  "& > :not(style)": { m: 1 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  id="old-password-input"
                  name="oldPassword"
                  label="Stare hasło"
                  type="password"
                  value={values.oldPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.oldPassword &&
                    touched.oldPassword &&
                    errors.oldPassword
                  }
                  error={
                    errors.oldPassword && touched.oldPassword ? true : false
                  }
                  required
                />
                <TextField
                  id="new-password-input"
                  name="newPassword"
                  label="Nowe hasło"
                  type="password"
                  value={values.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.newPassword &&
                    touched.newPassword &&
                    errors.newPassword
                  }
                  error={
                    errors.newPassword && touched.newPassword ? true : false
                  }
                  required
                />
                <ColorButton type="submit" variant="outlined" color="secondary">
                  Zmień
                </ColorButton>
              </Box>
              {changePasswordStatus === "Success" ? (
                <CustomAlert severity="success" msg={successMessage} />
              ) : changePasswordStatus === "Invalid password" ? (
                <CustomAlert severity="error" msg={invalidPasswordMessage} />
              ) : (
                changePasswordStatus && (
                  <CustomAlert severity="error" msg="Nieoczekiwany błąd." />
                )
              )}
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};
