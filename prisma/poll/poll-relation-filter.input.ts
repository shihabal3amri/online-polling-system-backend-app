import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PollWhereInput } from './poll-where.input';

@InputType()
export class PollRelationFilter {

    @Field(() => PollWhereInput, {nullable:true})
    is?: PollWhereInput;

    @Field(() => PollWhereInput, {nullable:true})
    isNot?: PollWhereInput;
}
