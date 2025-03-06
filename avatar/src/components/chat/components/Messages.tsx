import { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Message } from "../models/Message";
import { useAuth } from "../../auth/components/AuthProvider";
import { CustomAvatar } from "../../lib";

export default function Messages({ messages }: { messages: Message[] }) {
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const { user } = useAuth()

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    return (
        <Box sx={{ flexGrow: 1, overflowY: "auto", p: 1, display: "flex", flexDirection: "column" }}>
            {messages.map((message, index) => (
                <Box
                    key={index}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: message.sender.id === user?.id ? "flex-end" : "flex-start",
                        mb: 1,
                    }}
                >
                    {message.sender.id !== user?.id && (
                        <Box sx={{ mr: 1 }}>
                            <CustomAvatar
                                name={`${message.sender.firstName} ${message.sender.lastName}`}
                                imgSrc={
                                    message.sender.imgSrc &&
                                    (process.env.NODE_ENV === "production"
                                        ? `${process.env.REACT_APP_HOST}/public/images/${message.sender.imgSrc}`
                                        : `${process.env.REACT_APP_HOST}/images/${message.sender.imgSrc}`)
                                }
                                size="small"
                            />
                        </Box>
                    )}

                    <Typography
                        sx={{
                            color: "white",
                            backgroundColor: message.sender.id === user?.id ? "black" : "grey",
                            p: 1,
                            borderRadius: 2,
                            maxWidth: "75%",
                        }}
                    >
                        {message.text}
                    </Typography>

                    {message.sender.id === user?.id && (
                        <Box sx={{ ml: 1 }}>
                            <CustomAvatar
                                name={`${message.sender.firstName} ${message.sender.lastName}`}
                                imgSrc={
                                    message.sender.imgSrc &&
                                    (process.env.NODE_ENV === "production"
                                        ? `${process.env.REACT_APP_HOST}/public/images/${message.sender.imgSrc}`
                                        : `${process.env.REACT_APP_HOST}/images/${message.sender.imgSrc}`)
                                }
                                size="small"
                            />
                        </Box>
                    )}
                </Box>
            ))}
            <div ref={messagesEndRef} />
        </Box>
    )
}