import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionUpdateWithoutVotesInput } from './option-update-without-votes.input';
import { Type } from 'class-transformer';
import { OptionCreateWithoutVotesInput } from './option-create-without-votes.input';
import { OptionWhereInput } from './option-where.input';

@InputType()
export class OptionUpsertWithoutVotesInput {

    @Field(() => OptionUpdateWithoutVotesInput, {nullable:false})
    @Type(() => OptionUpdateWithoutVotesInput)
    update!: OptionUpdateWithoutVotesInput;

    @Field(() => OptionCreateWithoutVotesInput, {nullable:false})
    @Type(() => OptionCreateWithoutVotesInput)
    create!: OptionCreateWithoutVotesInput;

    @Field(() => OptionWhereInput, {nullable:true})
    @Type(() => OptionWhereInput)
    where?: OptionWhereInput;
}
