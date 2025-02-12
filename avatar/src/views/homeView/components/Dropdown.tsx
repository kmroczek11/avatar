import React, { useState } from "react";
import { Box, ClickAwayListener, Paper, Popper, Tooltip, IconButton, Grow } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SearchBar from "./SearchBar";
import { motion, AnimatePresence } from "framer-motion";
import CreatePostBox from "./CreatePostBox";
import PostList from "./PostsList";
import { useTheme, Theme } from '@mui/material/styles';

export default function Dropdown() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const theme = useTheme<Theme>();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event: React.MouseEvent<HTMLButtonElement> | MouseEvent | TouchEvent) => {
        if (anchorEl && anchorEl.contains(event.target as Node)) return;

        setAnchorEl(null);
    };

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            position: 'absolute',
            top: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
            bgcolor: "background.paper",
            boxShadow: 2,
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
            width: "100%",
            maxWidth: 800,
            height: '3vh',

            [theme.breakpoints.down('sm')]: {
                left: 0,
                transform: 'translateX(0)',
                width: '100vw',
                zIndex:2
            },
        }}>
            <Tooltip title="Otwórz stronę główną">
                <IconButton
                    aria-label="open-home-page"
                    onClick={handleClick}
                >
                    <ArrowDropDownIcon />
                </IconButton>
            </Tooltip>
            <AnimatePresence>
                {open && (
                    <Popper
                        open
                        anchorEl={anchorEl}
                        placement="bottom"
                        disablePortal
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <ClickAwayListener onClickAway={handleClose}>
                                <Paper sx={{
                                    width: 800,
                                    height: "calc(92vh - 20px)",
                                    overflowY: "auto",
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',

                                    [theme.breakpoints.down('sm')]: {
                                        width: '100vw',
                                        maxWidth: '100vw',
                                        borderRadius: 0,
                                    },
                                }}>
                                    <SearchBar />
                                    <CreatePostBox />
                                    <PostList />
                                    <Tooltip title="Zamknij stronę główną" sx={{ marginTop: "auto" }}>
                                        <IconButton
                                            aria-label="close-home-page"
                                            onClick={handleClose}
                                        >
                                            <ArrowDropUpIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Paper>
                            </ClickAwayListener>
                        </motion.div>
                    </Popper>
                )}
            </AnimatePresence>
        </Box>
    );
};