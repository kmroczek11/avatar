import { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Message } from "../models/Message";

export default function Messages({ messages }: { messages: Message[] }) {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    return (
        <Box sx={{ flexGrow: 1, overflowY: "auto", p: 1 }}>
            {
                messages.map((message, index) =>
                    <Typography
                        key={index}
                        sx={{
                            //   bgcolor: msg.sender === "user" ? "primary.light" : "grey.300",
                            color: "black",
                            p: 1,
                            borderRadius: 2,
                            maxWidth: "75%",
                            //   alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                            mb: 1,
                        }}
                    >
                        {message.text}
                    </Typography>
                )}
            <div ref={messagesEndRef} />
        </Box>
    );
}