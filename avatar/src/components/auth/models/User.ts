import { Role } from "../../../generated/graphql";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string
    phoneNumber: string;
    imgSrc?: string | null;
    roles?: Role[] | null
}