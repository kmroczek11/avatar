import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import PostCard from "./PostCard"; // Individual Post Component
import Grid from '@mui/material/Grid2';
import { GetFriendsPostsQuery, useGetFriendsPostsQuery } from "../../../generated/graphql";
import createAccessClient from "../../../graphql/clients/accessClient";
import { useAuth } from "../../../components/auth/components/AuthProvider";

export default function PostList() {
    const { user, accessToken } = useAuth()

    const { data, isLoading, error } = useGetFriendsPostsQuery<GetFriendsPostsQuery, Error>(
        createAccessClient(accessToken!),
        {
            input: {
                userId: user?.id!
            }
        },
        {
            onSuccess: (data) => { },
        }
    )
    if (isLoading) return <CircularProgress sx={{ display: "block", margin: "auto" }} />;
    if (error) return <Typography color="error">Błąd: {error.message}</Typography>;

    const posts = data?.getFriendsPosts || [];

    return (
        <Grid container spacing={3} sx={{ mt: 4, justifyContent: "center" }}>
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