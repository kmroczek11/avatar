import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import PostCard from "./PostCard";
import Grid from '@mui/material/Grid2';
import createAccessClient from "../../../graphql/clients/accessClient";
import { useAuth } from "../../../components/auth/components/AuthProvider";
import { GetPostsQuery, useGetPostsQuery } from "../../../generated/graphql";

export default function PostList() {
    const { user, accessToken, refreshToken } = useAuth()

    const { data, isLoading, error } = useGetPostsQuery<GetPostsQuery, Error>(
        createAccessClient(accessToken!, refreshToken!),
        {
            input: {
                userId: user?.id!
            }
        },
        {
            onSuccess: (data) => { },
            refetchInterval: 1000
        }
    )
    if (isLoading) return <CircularProgress sx={{ display: "block", margin: "auto" }} />;
    if (error) return <Typography color="error">Błąd: {error.message}</Typography>;

    const posts = data?.getPosts || [];

    return (
        <Grid container spacing={3} sx={{ mt: 4, justifyContent: "center", width: '80%' }}>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <Grid key={post.id} sx={{ flexBasis: "100%", sm: { flexBasis: "50%" }, md: { flexBasis: "33.33%" } }}>
                        <PostCard post={post} />
                    </Grid>
                ))
            ) : (
                <Typography sx={{ textAlign: "center", mt: 2, width: "100%" }}>
                    Brak postów do wyświetlenia
                </Typography>
            )}
        </Grid>
    );
};