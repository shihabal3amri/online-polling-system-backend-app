import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionWhereInput } from './option-where.input';

@InputType()
export class OptionListRelationFilter {

    @Field(() => OptionWhereInput, {nullable:true})
    every?: OptionWhereInput;

    @Field(() => OptionWhereInput, {nullable:true})
    some?: OptionWhereInput;

    @Field(() => OptionWhereInput, {nullable:true})
    none?: OptionWhereInput;
}
