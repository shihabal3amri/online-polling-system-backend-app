import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PollCount {

    @Field(() => Int, {nullable:false})
    options?: number;

    @Field(() => Int, {nullable:false})
    votes?: number;
}
