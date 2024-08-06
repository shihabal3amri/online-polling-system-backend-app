import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PollUpdateManyMutationInput } from './poll-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PollWhereInput } from './poll-where.input';

@ArgsType()
export class UpdateManyPollArgs {

    @Field(() => PollUpdateManyMutationInput, {nullable:false})
    @Type(() => PollUpdateManyMutationInput)
    data!: PollUpdateManyMutationInput;

    @Field(() => PollWhereInput, {nullable:true})
    @Type(() => PollWhereInput)
    where?: PollWhereInput;
}
