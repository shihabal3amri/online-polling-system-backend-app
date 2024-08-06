import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PollCreateManyInput } from './poll-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPollArgs {

    @Field(() => [PollCreateManyInput], {nullable:false})
    @Type(() => PollCreateManyInput)
    data!: Array<PollCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
