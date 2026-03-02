import React from "react";
import { Card, CardContent, CardHeader, CardMedia, Typography, Avatar } from "@mui/material";
import { GetPostsQuery } from "../../../generated/graphql";
import { CustomAvatar } from "../../../components/lib";

interface PostProps {
    post: GetPostsQuery["getPosts"][0];
}

export default function PostCard({ post }: PostProps) {
    return (
        <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardHeader
                avatar={
                    <CustomAvatar
                        name={`${post?.author?.firstName} ${post?.author?.lastName}`}
                        size="small"
                        imgSrc={post?.author?.imgSrc &&
                            (import.meta.env.NODE_ENV === "production"
                                ? `${import.meta.env.VITE_HOST}/public/images/${post?.author?.imgSrc}`
                                : `${import.meta.env.VITE_HOST}/images/${post?.author?.imgSrc}`)}
                    />
                }
                title={`${post?.author?.firstName} ${post?.author?.lastName}`}
                subheader={new Date(post?.createdAt).toLocaleDateString()}
            />
            {post?.imgSrc && (
                <CardMedia
                    component="img"
                    height="200"
                    image={post.imgSrc &&
                        (import.meta.env.NODE_ENV === "production"
                            ? `${import.meta.env.VITE_HOST}/public/images/${post.imgSrc}`
                            : `${import.meta.env.VITE_HOST}/images/${post.imgSrc}`)
                    }
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