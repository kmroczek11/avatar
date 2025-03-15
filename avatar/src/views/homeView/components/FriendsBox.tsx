import React from "react";
import { Box, List, ListItem, ListItemAvatar, ListItemText, Typography, CircularProgress, Tooltip, IconButton } from "@mui/material";
import { useAuth } from "../../../components/auth/components/AuthProvider";
import CustomAvatar from "../../../components/lib/CustomAvatar";
import { GetAllFriendsQuery, MinimalUser, useGetAllFriendsQuery } from "../../../generated/graphql";
import { useTheme, Theme } from '@mui/material/styles';
import ChatIcon from '@mui/icons-material/Chat';
import { useClickAnyWhere } from "usehooks-ts";
import { useClient } from "../../../components/auth/components/ClientProvider";

interface FriendBoxProps {
    addChatUser: (user: MinimalUser) => void
}

export default function FriendsBox(props: FriendBoxProps) {
    const { addChatUser } = props;
    const { user } = useAuth();
    const theme = useTheme<Theme>();
    const { accessClient } = useClient()

    const { data, isLoading, error } = useGetAllFriendsQuery<GetAllFriendsQuery, Error>(
        accessClient!,
        {
            input: {
                userId: user?.id!
            }
        },
        {
            enabled: !!accessClient,
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
                right: 10,
                transform: 'translateY(-50%)',
                zIndex: 1,

                [theme.breakpoints.down('sm')]: {
                    top: '100%',
                    right: 0,
                    transform: 'translateY(-100%)',
                    maxWidth: '100%',
                },
            }}
        >
            <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
                Lista znajomych
            </Typography>
            <List>
                {data?.getAllFriends.length ? (
                    data.getAllFriends.map((friend) => (
                        <ListItem key={friend.id} secondaryAction={
                            <Tooltip title="Otwórz czat">
                                <IconButton color="inherit" onClick={() => addChatUser(friend!)}>
                                    <ChatIcon />
                                </IconButton>
                            </Tooltip>
                        }>
                            <ListItemAvatar>
                                <CustomAvatar name={`${friend.firstName} ${friend.lastName}`} imgSrc={
                                    friend.imgSrc &&
                                    (process.env.NODE_ENV === "production"
                                        ? `${process.env.REACT_APP_HOST}/public/images/${friend.imgSrc}`
                                        : `${process.env.REACT_APP_HOST}/images/${friend.imgSrc}`)
                                } size="small" />
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