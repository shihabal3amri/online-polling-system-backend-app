import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionWhereInput } from './option-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { VoteListRelationFilter } from '../vote/vote-list-relation-filter.input';
import { PollRelationFilter } from '../poll/poll-relation-filter.input';

@InputType()
export class OptionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [OptionWhereInput], {nullable:true})
    AND?: Array<OptionWhereInput>;

    @Field(() => [OptionWhereInput], {nullable:true})
    OR?: Array<OptionWhereInput>;

    @Field(() => [OptionWhereInput], {nullable:true})
    NOT?: Array<OptionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    pollId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    timestamp?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => VoteListRelationFilter, {nullable:true})
    votes?: VoteListRelationFilter;

    @Field(() => PollRelationFilter, {nullable:true})
    poll?: PollRelationFilter;
}
