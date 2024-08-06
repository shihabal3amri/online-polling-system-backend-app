import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class OptionScalarWhereWithAggregatesInput {

    @Field(() => [OptionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OptionScalarWhereWithAggregatesInput>;

    @Field(() => [OptionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OptionScalarWhereWithAggregatesInput>;

    @Field(() => [OptionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OptionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    pollId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    text?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    timestamp?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
