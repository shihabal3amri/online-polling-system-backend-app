import { registerEnumType } from '@nestjs/graphql';

export enum PollScalarFieldEnum {
    id = "id",
    title = "title",
    userId = "userId",
    isPollEndedByUser = "isPollEndedByUser",
    willEndAt = "willEndAt",
    isMultipleOptions = "isMultipleOptions",
    timestamp = "timestamp",
    updatedAt = "updatedAt"
}


registerEnumType(PollScalarFieldEnum, { name: 'PollScalarFieldEnum', description: undefined })
