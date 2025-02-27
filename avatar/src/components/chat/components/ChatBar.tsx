import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { CustomAvatar } from "../../lib";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import { MinimalUser } from "../../../generated/graphql";

interface ChatBarProps {
    user: MinimalUser,
    removeChatUser: (user: MinimalUser) => void
}

export default function ChatBar(props: ChatBarProps) {
    const { user, removeChatUser } = props;

    return (
        <AppBar position="static" color="primary" sx={{ p: 1 }}>
            <Toolbar sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CustomAvatar name={`${user.firstName} ${user.lastName}`} imgSrc={
                        user.imgSrc &&
                        (process.env.NODE_ENV === "production"
                            ? `${process.env.REACT_APP_HOST}/public/images/${user.imgSrc}`
                            : `${process.env.REACT_APP_HOST}/images/${user.imgSrc}`)
                    } size="small" />
                    <Typography variant="h6">{user.firstName} {user.lastName}</Typography>
                </div>
                <Tooltip title="Zamknij">
                    <IconButton color="inherit" onClick={() => removeChatUser(user)}>
                        <CloseIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}