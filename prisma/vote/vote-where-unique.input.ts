import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteWhereInput } from './vote-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { PollRelationFilter } from '../poll/poll-relation-filter.input';
import { OptionRelationFilter } from '../option/option-relation-filter.input';

@InputType()
export class VoteWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [VoteWhereInput], {nullable:true})
    AND?: Array<VoteWhereInput>;

    @Field(() => [VoteWhereInput], {nullable:true})
    OR?: Array<VoteWhereInput>;

    @Field(() => [VoteWhereInput], {nullable:true})
    NOT?: Array<VoteWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    pollId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    optionId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    timestamp?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isVoted?: BoolFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => PollRelationFilter, {nullable:true})
    poll?: PollRelationFilter;

    @Field(() => OptionRelationFilter, {nullable:true})
    option?: OptionRelationFilter;
}
