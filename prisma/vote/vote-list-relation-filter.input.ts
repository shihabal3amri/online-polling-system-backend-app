import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteWhereInput } from './vote-where.input';

@InputType()
export class VoteListRelationFilter {

    @Field(() => VoteWhereInput, {nullable:true})
    every?: VoteWhereInput;

    @Field(() => VoteWhereInput, {nullable:true})
    some?: VoteWhereInput;

    @Field(() => VoteWhereInput, {nullable:true})
    none?: VoteWhereInput;
}
