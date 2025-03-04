import { User } from "../../../generated/graphql";
import { Chat } from "./Chat";

export interface Message {
    id?: string;
    text: string;
    createdAt: Date;
    sender: User;
    chat: Chat
}