import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class VoteScalarWhereWithAggregatesInput {

    @Field(() => [VoteScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VoteScalarWhereWithAggregatesInput>;

    @Field(() => [VoteScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VoteScalarWhereWithAggregatesInput>;

    @Field(() => [VoteScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VoteScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    pollId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    optionId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    timestamp?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isVoted?: BoolWithAggregatesFilter;
}
