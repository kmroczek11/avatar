import React, { useState } from "react";
import { Box, Button, Card, CardContent, CircularProgress, TextField, Typography } from "@mui/material";
import { useAuth } from "../../../components/auth/components/AuthProvider";
import createAccessClient from "../../../graphql/clients/accessClient";
import { useCreatePostMutation } from "../../../generated/graphql";
import { ColorButton } from "../../../components/lib";

export default function CreatePostBox() {
    const { user, accessToken } = useAuth();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState<string | null>(null);

    const { isLoading, mutate: createPost } = useCreatePostMutation(createAccessClient(accessToken!), {
        onSuccess: () => {
            setTitle("");
            setContent("");
            setImageUrl("");
            setError(null);
        },
    })

    const handleSubmit = async () => {
        if (!title.trim() || !content.trim()) {
            setError("Tytuł i treść są wymagane!");
            return;
        }

        await createPost({
            input: { title, content, imageUrl, authorId: user?.id! },
        });
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
            <TextField
                fullWidth
                label="Adres URL zdjęcia (opcjonalnie)"
                variant="outlined"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                sx={{ mb: 2 }}
            />
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