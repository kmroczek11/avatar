import { registerEnumType } from '@nestjs/graphql';

export enum Status {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
    CANCELED = "CANCELED"
}


registerEnumType(Status, { name: 'Status', description: undefined })
