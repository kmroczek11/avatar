import { useState } from "react";
import TextField from "@mui/material/TextField";
import { ColorButton, CustomAlert, LoadingScreen } from "../../../components/lib";
import Box from "@mui/material/Box";
import {
  useChangeEmailMutation,
  ChangeEmailMutation,
  ChangeEmailMutationVariables,
} from "../../../generated/graphql";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import createAccessClient from "../../../graphql/clients/accessClient";
import { useAuth } from "../../../components/auth/components/AuthProvider";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";

const defaultValues = {
  newEmail: "",
};

const successMessage = "E-mail został zmieniony.";

export default function EmailForm() {
  const { user } = useAuth();
  const [changeEmailStatus, setChangeEmailStatus] = useState<string>("");
  const [cookies] = useCookies(['userId']);
  const [accesssToken, setAccessToken] = useState<string>("")

  const { isLoading: isGetAccessTokenLoading, error: accessTokenGetError, data, isFetching: isGetAccessTokenFetching } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      axios
        .get(`${process.env.REACT_APP_HOST}/auth/getAccessToken/${cookies.userId}`)
        .then((res) => setAccessToken(res.data)),
    enabled: cookies.userId ? true : false
  })

  const { isLoading, mutate } = useChangeEmailMutation<Error>(createAccessClient(accesssToken), {
    onError: (error: Error) => {
      let err: any = {};
      err.data = error;
      setChangeEmailStatus(err?.data?.response.errors[0].message);
    },
    onSuccess: (
      data: ChangeEmailMutation,
      _variables: ChangeEmailMutationVariables,
      _context: unknown
    ) => {
      setChangeEmailStatus("Success");
    },
  });

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <Formik
      initialValues={defaultValues}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);

        const { newEmail } = values;

        mutate({
          input: {
            id: user?.id!,
            email: newEmail,
          },
        });
      }}
      validationSchema={Yup.object().shape({
        newEmail: Yup.string()
          .email("Nieprawidłowy email")
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
                  id="new-email-input"
                  name="newEmail"
                  label="Nowy email"
                  type="email"
                  value={values.newEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.newEmail && touched.newEmail && errors.newEmail
                  }
                  error={errors.newEmail && touched.newEmail ? true : false}
                  required
                />
                <ColorButton type="submit" variant="outlined" color="secondary">
                  Zmień
                </ColorButton>
              </Box>
              {changeEmailStatus === "Success" ? (
                <CustomAlert severity="success" msg={successMessage} />
              ) : (
                changeEmailStatus && (
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
