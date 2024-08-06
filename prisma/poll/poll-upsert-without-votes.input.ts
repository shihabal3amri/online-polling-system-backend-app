import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PollUpdateWithoutVotesInput } from './poll-update-without-votes.input';
import { Type } from 'class-transformer';
import { PollCreateWithoutVotesInput } from './poll-create-without-votes.input';
import { PollWhereInput } from './poll-where.input';

@InputType()
export class PollUpsertWithoutVotesInput {

    @Field(() => PollUpdateWithoutVotesInput, {nullable:false})
    @Type(() => PollUpdateWithoutVotesInput)
    update!: PollUpdateWithoutVotesInput;

    @Field(() => PollCreateWithoutVotesInput, {nullable:false})
    @Type(() => PollCreateWithoutVotesInput)
    create!: PollCreateWithoutVotesInput;

    @Field(() => PollWhereInput, {nullable:true})
    @Type(() => PollWhereInput)
    where?: PollWhereInput;
}
