import React from "react";
import { Box, List, ListItem, ListItemAvatar, ListItemText, Typography, CircularProgress } from "@mui/material";
import { useAuth } from "../../../components/auth/components/AuthProvider";
import CustomAvatar from "../../../components/lib/CustomAvatar";
import { GetAllFriendsQuery, useGetAllFriendsQuery } from "../../../generated/graphql";
import createAccessClient from "../../../graphql/clients/accessClient";

export default function FriendsBox() {
    const { user, accessToken } = useAuth();

    const { data, isLoading, error } = useGetAllFriendsQuery<GetAllFriendsQuery, Error>(
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

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: 400,
                bgcolor: "background.paper",
                boxShadow: 2,
                borderRadius: 2,
                padding: 2,
                position: 'absolute',
                top: '50%',
                right: 0,
                transform: 'translateY(-50%)',
                zIndex: 1,
            }}
        >
            <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
                Lista znajomych
            </Typography>
            <List>
                {data?.getAllFriends.length ? (
                    data.getAllFriends.map((friend) => (
                        <ListItem key={friend.id}>
                            <ListItemAvatar>
                                <CustomAvatar name={`${friend.firstName} ${friend.lastName}`} imgSrc={friend.imgSrc || ""} size="small"/>
                            </ListItemAvatar>
                            <ListItemText primary={`${friend.firstName} ${friend.lastName}`} />
                        </ListItem>
                    ))
                ) : (
                    <Typography sx={{ textAlign: "center", mt: 2 }}>Brak znajomych</Typography>
                )}
            </List>
        </Box>
    );
};