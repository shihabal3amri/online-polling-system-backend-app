import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PollWhereInput } from './poll-where.input';

@InputType()
export class PollListRelationFilter {

    @Field(() => PollWhereInput, {nullable:true})
    every?: PollWhereInput;

    @Field(() => PollWhereInput, {nullable:true})
    some?: PollWhereInput;

    @Field(() => PollWhereInput, {nullable:true})
    none?: PollWhereInput;
}
