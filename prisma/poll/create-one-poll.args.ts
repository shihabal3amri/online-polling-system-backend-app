import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PollCreateInput } from './poll-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePollArgs {

    @Field(() => PollCreateInput, {nullable:false})
    @Type(() => PollCreateInput)
    data!: PollCreateInput;
}
