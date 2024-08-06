import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OptionWhereUniqueInput } from './option-where-unique.input';
import { Type } from 'class-transformer';
import { OptionCreateWithoutVotesInput } from './option-create-without-votes.input';

@InputType()
export class OptionCreateOrConnectWithoutVotesInput {

    @Field(() => OptionWhereUniqueInput, {nullable:false})
    @Type(() => OptionWhereUniqueInput)
    where!: Prisma.AtLeast<OptionWhereUniqueInput, 'id'>;

    @Field(() => OptionCreateWithoutVotesInput, {nullable:false})
    @Type(() => OptionCreateWithoutVotesInput)
    create!: OptionCreateWithoutVotesInput;
}
