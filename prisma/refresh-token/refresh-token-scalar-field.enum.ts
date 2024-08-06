import { registerEnumType } from '@nestjs/graphql';

export enum RefreshTokenScalarFieldEnum {
    id = "id",
    userId = "userId",
    token = "token",
    timestamp = "timestamp",
    updatedAt = "updatedAt",
    isArchived = "isArchived",
    archivedAt = "archivedAt"
}


registerEnumType(RefreshTokenScalarFieldEnum, { name: 'RefreshTokenScalarFieldEnum', description: undefined })
