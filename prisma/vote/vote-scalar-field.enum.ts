import { registerEnumType } from '@nestjs/graphql';

export enum VoteScalarFieldEnum {
    id = "id",
    userId = "userId",
    pollId = "pollId",
    optionId = "optionId",
    timestamp = "timestamp",
    updatedAt = "updatedAt",
    isVoted = "isVoted"
}


registerEnumType(VoteScalarFieldEnum, { name: 'VoteScalarFieldEnum', description: undefined })
