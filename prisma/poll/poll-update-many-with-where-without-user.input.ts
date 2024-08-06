import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PollScalarWhereInput } from './poll-scalar-where.input';
import { Type } from 'class-transformer';
import { PollUpdateManyMutationInput } from './poll-update-many-mutation.input';

@InputType()
export class PollUpdateManyWithWhereWithoutUserInput {

    @Field(() => PollScalarWhereInput, {nullable:false})
    @Type(() => PollScalarWhereInput)
    where!: PollScalarWhereInput;

    @Field(() => PollUpdateManyMutationInput, {nullable:false})
    @Type(() => PollUpdateManyMutationInput)
    data!: PollUpdateManyMutationInput;
}
