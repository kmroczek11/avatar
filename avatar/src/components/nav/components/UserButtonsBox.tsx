import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ColorButton, CustomDialog, CustomAvatar } from "../../lib";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useCookies } from "react-cookie";
import { LogOutUserMutation, LogOutUserMutationVariables, Role, useLogOutUserMutation } from "../../../generated/graphql";
import createAccessClient from "../../../graphql/clients/accessClient";
import { useAuth } from "../../auth/components/AuthProvider";

const errorMessage =
    "Wystąpił nieoczekiwany błąd. Skontaktuj się z administratorem strony.";

export default function UserButtonsBox() {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const [logoutStatus, setLogoutStatus] = useState<string>("");
    const [cookies, setCookie, removeCookie] = useCookies(['userId']);
    const { user, accessToken, getUserRefetch, getAccessTokenRefetch } = useAuth();

    const { isLoading, mutate: logOut } = useLogOutUserMutation<Error>(
        createAccessClient(accessToken!),
        {
            onError: (error: Error) => {
                let err: any = {};
                err.data = error;
                setLogoutStatus(err?.data?.response.errors[0].message);
            },
            onSuccess: (
                data: LogOutUserMutation,
                _variables: LogOutUserMutationVariables,
                _context: unknown
            ) => {
                removeCookie('userId')
                getUserRefetch()
                getAccessTokenRefetch()
            },
        }
    );

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box
            sx={{
                flexGrow: 0,
                flexDirection: "row",
                justifyContext: "space-between",
                alignItems: "center",
                display: "flex",
            }}
        >
            {user && (
                <React.Fragment>
                    <Tooltip title="Otwórz panel użytkownika">
                        <IconButton onClick={handleOpenUserMenu}>
                            <CustomAvatar
                                name={`${user.firstName} ${user.lastName}`}
                                size="small"
                                imgSrc={
                                    user?.imgSrc &&
                                    (process.env.NODE_ENV === "development"
                                        ? `${process.env.REACT_APP_HOST}/images/${user.imgSrc}`
                                        : `${process.env.REACT_APP_HOST}/public/images/${user.imgSrc}`)
                                }
                            />
                        </IconButton>
                    </Tooltip>
                    <Typography
                        variant="body2"
                        color="primary.contrastText"
                        sx={{ display: { xs: "none", md: "block" } }}
                    >
                        {user.firstName}
                    </Typography>
                    &nbsp;
                    <Typography
                        variant="body2"
                        color="primary.contrastText"
                        sx={{ display: { xs: "none", md: "block" } }}
                    >
                        {user.lastName}
                    </Typography>
                    <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {user.roles.includes(Role.User) && (
                            <MenuItem onClick={() => navigate("/ustawienia")}>
                                <ListItemIcon>
                                    <SettingsIcon fontSize="small" />
                                </ListItemIcon>
                                Ustawienia
                            </MenuItem>
                        )}
                        <MenuItem sx={{ justifyContent: "center" }}>
                            <ColorButton
                                variant="contained"
                                color="error"
                                onClick={() =>
                                    logOut({
                                        input: {
                                            userId: cookies.userId
                                        }
                                    })}
                            >
                                Wyloguj
                            </ColorButton>
                        </MenuItem>
                    </Menu>
                    {logoutStatus && (
                        <CustomDialog
                            title="Nieoczekiwany błąd"
                            content={errorMessage}
                            onClose={() => setLogoutStatus("")}
                        />
                    )}
                </React.Fragment>
            )}
        </Box>
    );
};