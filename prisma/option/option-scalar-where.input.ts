import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OptionScalarWhereInput {

    @Field(() => [OptionScalarWhereInput], {nullable:true})
    AND?: Array<OptionScalarWhereInput>;

    @Field(() => [OptionScalarWhereInput], {nullable:true})
    OR?: Array<OptionScalarWhereInput>;

    @Field(() => [OptionScalarWhereInput], {nullable:true})
    NOT?: Array<OptionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    pollId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    timestamp?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
