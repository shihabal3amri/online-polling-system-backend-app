import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PollWhereInput } from './poll-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OptionListRelationFilter } from '../option/option-list-relation-filter.input';
import { VoteListRelationFilter } from '../vote/vote-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class PollWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [PollWhereInput], {nullable:true})
    AND?: Array<PollWhereInput>;

    @Field(() => [PollWhereInput], {nullable:true})
    OR?: Array<PollWhereInput>;

    @Field(() => [PollWhereInput], {nullable:true})
    NOT?: Array<PollWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPollEndedByUser?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    willEndAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isMultipleOptions?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    timestamp?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => OptionListRelationFilter, {nullable:true})
    options?: OptionListRelationFilter;

    @Field(() => VoteListRelationFilter, {nullable:true})
    votes?: VoteListRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
