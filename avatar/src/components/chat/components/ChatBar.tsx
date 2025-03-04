import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { CustomAvatar } from "../../lib";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import { MinimalUser } from "../../../generated/graphql";

interface ChatBarProps {
    friend: MinimalUser,
    removeChatUser: (user: MinimalUser) => void
}

export default function ChatBar(props: ChatBarProps) {
    const { friend, removeChatUser } = props;

    return (
        <AppBar position="static" color="primary" sx={{ p: 1 }}>
            <Toolbar sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CustomAvatar name={`${friend.firstName} ${friend.lastName}`} imgSrc={
                        friend.imgSrc &&
                        (process.env.NODE_ENV === "production"
                            ? `${process.env.REACT_APP_HOST}/public/images/${friend.imgSrc}`
                            : `${process.env.REACT_APP_HOST}/images/${friend.imgSrc}`)
                    } size="small" />
                    <Typography variant="h6">{friend.firstName} {friend.lastName}</Typography>
                </div>
                <Tooltip title="Zamknij">
                    <IconButton color="inherit" onClick={() => removeChatUser(friend)}>
                        <CloseIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}