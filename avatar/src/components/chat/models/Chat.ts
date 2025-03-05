import { User } from "../../../generated/graphql";
import { Message } from "./Message";

export interface Chat {
    id: string;
    name: string;
    isGroup: boolean;
    updatedAt: Date;
    users?: User[];
    messages: Message[]
}