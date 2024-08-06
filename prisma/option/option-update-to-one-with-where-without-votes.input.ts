import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionWhereInput } from './option-where.input';
import { Type } from 'class-transformer';
import { OptionUpdateWithoutVotesInput } from './option-update-without-votes.input';

@InputType()
export class OptionUpdateToOneWithWhereWithoutVotesInput {

    @Field(() => OptionWhereInput, {nullable:true})
    @Type(() => OptionWhereInput)
    where?: OptionWhereInput;

    @Field(() => OptionUpdateWithoutVotesInput, {nullable:false})
    @Type(() => OptionUpdateWithoutVotesInput)
    data!: OptionUpdateWithoutVotesInput;
}
