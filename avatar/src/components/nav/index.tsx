import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import { Logo } from "../lib";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import UserButtonsBox from "./components/UserButtonsBox";
import logo from "../../assets/logos/logo.png";

export default function Navbar() {
    return (
        <Box height="5vh">
            <AppBar
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    background: (theme) => theme.palette.primary.main,
                }}
            >
                <Box sx={{ px: 10 }}>
                    <Toolbar
                        sx={{
                            justifyContent: "space-between",
                            borderBottom: 1,
                            borderColor: "divider",
                        }}
                        disableGutters
                    >
                        <Link href="/" color="primary.contrastText">
                            <Logo src={logo} alt="logo" />
                        </Link>
                        <Box
                            sx={{
                                flexGrow: 1,
                                justifyContent: "right",
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                        </Box>
                        <UserButtonsBox />
                    </Toolbar>
                </Box>
            </AppBar>
            <Toolbar />
        </Box>
    );
};