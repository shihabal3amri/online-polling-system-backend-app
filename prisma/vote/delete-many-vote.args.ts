import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VoteWhereInput } from './vote-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyVoteArgs {

    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: VoteWhereInput;
}
