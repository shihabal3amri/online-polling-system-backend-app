import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PollWhereInput } from './poll-where.input';
import { Type } from 'class-transformer';
import { PollUpdateWithoutVotesInput } from './poll-update-without-votes.input';

@InputType()
export class PollUpdateToOneWithWhereWithoutVotesInput {

    @Field(() => PollWhereInput, {nullable:true})
    @Type(() => PollWhereInput)
    where?: PollWhereInput;

    @Field(() => PollUpdateWithoutVotesInput, {nullable:false})
    @Type(() => PollUpdateWithoutVotesInput)
    data!: PollUpdateWithoutVotesInput;
}
