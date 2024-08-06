import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionScalarWhereInput } from './option-scalar-where.input';
import { Type } from 'class-transformer';
import { OptionUpdateManyMutationInput } from './option-update-many-mutation.input';

@InputType()
export class OptionUpdateManyWithWhereWithoutPollInput {

    @Field(() => OptionScalarWhereInput, {nullable:false})
    @Type(() => OptionScalarWhereInput)
    where!: OptionScalarWhereInput;

    @Field(() => OptionUpdateManyMutationInput, {nullable:false})
    @Type(() => OptionUpdateManyMutationInput)
    data!: OptionUpdateManyMutationInput;
}
