import { registerEnumType } from '@nestjs/graphql';

export enum OptionScalarFieldEnum {
    id = "id",
    pollId = "pollId",
    text = "text",
    timestamp = "timestamp",
    updatedAt = "updatedAt"
}


registerEnumType(OptionScalarFieldEnum, { name: 'OptionScalarFieldEnum', description: undefined })
