import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OptionUpdateManyMutationInput } from './option-update-many-mutation.input';
import { Type } from 'class-transformer';
import { OptionWhereInput } from './option-where.input';

@ArgsType()
export class UpdateManyOptionArgs {

    @Field(() => OptionUpdateManyMutationInput, {nullable:false})
    @Type(() => OptionUpdateManyMutationInput)
    data!: OptionUpdateManyMutationInput;

    @Field(() => OptionWhereInput, {nullable:true})
    @Type(() => OptionWhereInput)
    where?: OptionWhereInput;
}
