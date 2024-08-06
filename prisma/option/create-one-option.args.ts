import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OptionCreateInput } from './option-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneOptionArgs {

    @Field(() => OptionCreateInput, {nullable:false})
    @Type(() => OptionCreateInput)
    data!: OptionCreateInput;
}
