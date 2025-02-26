import React, { useState } from "react";
import { Box, CircularProgress, TextField, Typography } from "@mui/material";
import { useAuth } from "../../../components/auth/components/AuthProvider";
import createAccessClient from "../../../graphql/clients/accessClient";
import { useCreatePostMutation } from "../../../generated/graphql";
import { ColorButton } from "../../../components/lib";
import PostButtonsBox from "./PostButtonsBox";

export default function CreatePostBox() {
    const { user, accessToken } = useAuth();
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const { isLoading, mutate: createPost } = useCreatePostMutation(createAccessClient(accessToken!), {
        onSuccess: () => {
            setTitle("");
            setContent("");
            setError(null);
        },
    })

    const handleSubmit = async () => {
        if (!title.trim() || !content.trim()) {
            setError("Tytuł i treść są wymagane!");
            return;
        }

        const formData = new FormData();
        formData.append("operations", JSON.stringify({
            query: `
          mutation CreatePost($input: CreatePostInput!) {
            createPost(createPostInput: $input) {
                id
            }
        }
        `,
            variables: {
                input: {
                    title,
                    content,
                    image: null, // GraphQL Upload scalar requires `null` here
                    authorId: user?.id!
                },
            },
        }));

        if (image) {
            formData.append("map", JSON.stringify({ "0": ["variables.input.image"] }));
            formData.append("0", image);
        }

        const response = await fetch(`${process.env.REACT_APP_HOST}/graphql`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "apollo-require-preflight": "true",
            },
            body: formData,
        });

        const result = await response.json();

        if (result.errors) {
            throw new Error(result.errors[0].message);
        }
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
            <PostButtonsBox setImage={setImage} />
            {error && (
                <Typography color="error" sx={{ mb: 2 }}>
                    {error}
                </Typography>
            )}
            <ColorButton
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={isLoading}
                sx={{ width: 200 }}
            >
                {isLoading ? <CircularProgress size={24} /> : "Dodaj post"}
            </ColorButton>
        </Box>
    );
};