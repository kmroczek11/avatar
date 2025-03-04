import { User } from "../../../generated/graphql";

export interface Chat {
    id: string;
    name: string;
    isGroup: boolean;
    updatedAt: Date;
    users?: User[];
}