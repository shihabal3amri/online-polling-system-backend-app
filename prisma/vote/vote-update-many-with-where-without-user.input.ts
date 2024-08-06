import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteScalarWhereInput } from './vote-scalar-where.input';
import { Type } from 'class-transformer';
import { VoteUpdateManyMutationInput } from './vote-update-many-mutation.input';

@InputType()
export class VoteUpdateManyWithWhereWithoutUserInput {

    @Field(() => VoteScalarWhereInput, {nullable:false})
    @Type(() => VoteScalarWhereInput)
    where!: VoteScalarWhereInput;

    @Field(() => VoteUpdateManyMutationInput, {nullable:false})
    @Type(() => VoteUpdateManyMutationInput)
    data!: VoteUpdateManyMutationInput;
}
