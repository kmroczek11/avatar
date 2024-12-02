import { Role } from "../../../generated/graphql";

type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    imgSrc: string;
    roles: Role[];
};

export default User;