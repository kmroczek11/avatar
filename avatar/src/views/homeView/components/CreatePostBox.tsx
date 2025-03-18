import React, { useState } from "react";
import { Box, CircularProgress, TextField, Typography } from "@mui/material";
import { useAuth } from "../../../components/auth/components/AuthProvider";
import { useCreatePostMutation, useRefreshTokenMutation } from "../../../generated/graphql";
import { ColorButton } from "../../../components/lib";
import PostButtonsBox from "./PostButtonsBox";
import { useClient } from "../../../components/auth/components/ClientProvider";
import { useTokens } from "../../../components/auth/components/TokensProvider";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const defaultValues = {
    title: "",
    content: ""
};

export default function CreatePostBox() {
    const { user, logOut } = useAuth();
    const [image, setImage] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { client } = useClient()
    const { refreshToken, accessToken, setAccessToken } = useTokens()

    const refreshAccessToken = useRefreshTokenMutation(client!);

    const handleSubmit = async (title: string, content: string) => {
        const input: any = {
            title,
            content,
            authorId: user?.id!,
        };

        const query = `
        mutation CreatePost($input: CreatePostInput!) {
            createPost(createPostInput: $input) {
                id
            }
        }
    `;

        let body: string | FormData;
        let headers: Record<string, string> = {
            Authorization: `Bearer ${accessToken}`,
            "apollo-require-preflight": "true",

        };

        if (image) {
            input.image = null; // GraphQL Upload requires `null` as a placeholder
        }

        if (image) {
            body = new FormData();
            body.append("operations", JSON.stringify({ query, variables: { input } }));
            body.append("map", JSON.stringify({ "0": ["variables.input.image"] }));
            body.append("0", image);
        } else {
            body = JSON.stringify({ query, variables: { input } });
            headers["Content-Type"] = "application/json";
        }

        const sendRequest = async (accessToken: string) => {
            (headers as Record<string, string>)["Authorization"] = `Bearer ${accessToken}`;
            return await fetch(`${process.env.REACT_APP_HOST}/graphql`, {
                method: "POST",
                headers,
                body,
            });
        };

        let response = await sendRequest(accessToken!);
        let result = await response.json();

        if (result.errors && result.errors[0].message === "Unauthorized") {
            try {
                const refreshResponse = await refreshAccessToken.mutateAsync({ input: { refreshToken: refreshToken! } });

                const newAccessToken = refreshResponse?.refreshToken.accessToken;

                if (!newAccessToken) {
                    logOut({ input: { userId: user?.id! } })
                }

                setAccessToken(newAccessToken)

                response = await sendRequest(newAccessToken!);
                result = await response.json();
            } catch (refreshError) {
                logOut({ input: { userId: user?.id! } })
            }
        }

        if (result.errors) {
            throw new Error(result.errors[0].message);
        }

        setImage(null)
    };

    return (
        <Formik
            initialValues={defaultValues}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);

                const { title, content } = values;

                handleSubmit(title, content)

            }}
            validationSchema={Yup.object().shape({
                title: Yup.string()
                    .required("Wymagane"),
                content: Yup.string()
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
                    <Form onSubmit={handleSubmit}
                        style={{
                            width: '80%',
                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                        >
                            <Typography variant="h5" gutterBottom>
                                O czym myślisz?
                            </Typography>
                            <TextField
                                id="title-input"
                                name="title"
                                fullWidth
                                label="Tytuł"
                                variant="outlined"
                                value={values.title}
                                onChange={handleChange}
                                sx={{ mb: 2 }}
                                required
                            />
                            <TextField
                                id="content-input"
                                name="content"
                                fullWidth
                                label="Treść"
                                variant="outlined"
                                multiline
                                rows={4}
                                value={values.content}
                                onChange={handleChange}
                                sx={{ mb: 2 }}
                                helperText={
                                    errors.content && touched.content && errors.content
                                }
                                error={errors.content && touched.content ? true : false}
                                required
                            />
                            <PostButtonsBox image={image} setImage={setImage} />
                            {error && (
                                <Typography color="error" sx={{ mb: 2 }}>
                                    {error}
                                </Typography>
                            )}
                            <ColorButton
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{ width: 200 }}
                            >
                                Dodaj post
                            </ColorButton>
                        </Box>
                    </Form>
                );
            }}
        </Formik>
    )
};