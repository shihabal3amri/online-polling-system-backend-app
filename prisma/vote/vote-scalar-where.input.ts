import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class VoteScalarWhereInput {

    @Field(() => [VoteScalarWhereInput], {nullable:true})
    AND?: Array<VoteScalarWhereInput>;

    @Field(() => [VoteScalarWhereInput], {nullable:true})
    OR?: Array<VoteScalarWhereInput>;

    @Field(() => [VoteScalarWhereInput], {nullable:true})
    NOT?: Array<VoteScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
