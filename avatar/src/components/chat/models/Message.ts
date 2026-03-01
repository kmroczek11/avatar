import { User } from "../../../generated/graphql";
import { Chat } from "./Chat";

export interface Message {
    id?: string;
    text: string;
    createdAt: Date;
    senderId: string;
    chatId: string;
    sender?: User;
    chat?: Chat;
}