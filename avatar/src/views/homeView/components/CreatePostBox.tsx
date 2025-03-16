import React, { useState } from "react";
import { Box, CircularProgress, TextField, Typography } from "@mui/material";
import { useAuth } from "../../../components/auth/components/AuthProvider";
import { useCreatePostMutation, useRefreshTokenMutation } from "../../../generated/graphql";
import { ColorButton } from "../../../components/lib";
import PostButtonsBox from "./PostButtonsBox";
import { useClient } from "../../../components/auth/components/ClientProvider";
import { useTokens } from "../../../components/auth/components/TokensProvider";

export default function CreatePostBox() {
    const { user, logOut } = useAuth();
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { client } = useClient()
    const { refreshToken, accessToken, setAccessToken } = useTokens()

    const refreshAccessToken = useRefreshTokenMutation(client!);

    const handleSubmit = async () => {
        if (!title.trim() || !content.trim()) {
            setError("Tytuł i treść są wymagane!");
            return;
        }

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
        <Box sx={{
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}
        >
            <Typography variant="h5" gutterBottom>
                O czym myślisz?
            </Typography>
            <TextField
                fullWidth
                label="Tytuł"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Treść"
                variant="outlined"
                multiline
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                sx={{ mb: 2 }}
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
                onClick={handleSubmit}
                sx={{ width: 200 }}
            >
                Dodaj post
            </ColorButton>
        </Box>
    );
};