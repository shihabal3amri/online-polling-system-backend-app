import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PollScalarWhereInput {

    @Field(() => [PollScalarWhereInput], {nullable:true})
    AND?: Array<PollScalarWhereInput>;

    @Field(() => [PollScalarWhereInput], {nullable:true})
    OR?: Array<PollScalarWhereInput>;

    @Field(() => [PollScalarWhereInput], {nullable:true})
    NOT?: Array<PollScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
