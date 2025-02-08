import React from "react";
import { Card, CardContent, CardHeader, CardMedia, Typography, Avatar } from "@mui/material";
import { GetFriendsPostsQuery } from "../../../generated/graphql";
import { CustomAvatar } from "../../../components/lib";

interface PostProps {
    post: GetFriendsPostsQuery["getFriendsPosts"][0];
}

export default function PostCard({ post }: PostProps) {
    return (
        <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardHeader
                avatar={<CustomAvatar name={`${post?.author?.firstName} ${post?.author?.lastName}`} size="small" />}
                title={`${post?.author?.firstName} ${post?.author?.lastName}`}
                subheader={new Date(post?.createdAt).toLocaleDateString()}
            />
            {post?.imageUrl && (
                <CardMedia
                    component="img"
                    height="200"
                    image={post.imageUrl}
                    alt="Post Image"
                />
            )}
            <CardContent>
                <Typography variant="h5" sx={{ mb: 1 }}>
                    {post?.title}
                </Typography>
                <Typography variant="body1">{post?.content}</Typography>
            </CardContent>
        </Card>
    );
};