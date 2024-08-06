import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VoteCreateInput } from './vote-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneVoteArgs {

    @Field(() => VoteCreateInput, {nullable:false})
    @Type(() => VoteCreateInput)
    data!: VoteCreateInput;
}
