import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PollWhereInput } from './poll-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPollArgs {

    @Field(() => PollWhereInput, {nullable:true})
    @Type(() => PollWhereInput)
    where?: PollWhereInput;
}
