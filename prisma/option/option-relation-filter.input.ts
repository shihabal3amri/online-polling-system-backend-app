import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionWhereInput } from './option-where.input';

@InputType()
export class OptionRelationFilter {

    @Field(() => OptionWhereInput, {nullable:true})
    is?: OptionWhereInput;

    @Field(() => OptionWhereInput, {nullable:true})
    isNot?: OptionWhereInput;
}
