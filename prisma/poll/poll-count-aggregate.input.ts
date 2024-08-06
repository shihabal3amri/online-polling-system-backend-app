import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PollCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    isPollEndedByUser?: true;

    @Field(() => Boolean, {nullable:true})
    willEndAt?: true;

    @Field(() => Boolean, {nullable:true})
    isMultipleOptions?: true;

    @Field(() => Boolean, {nullable:true})
    timestamp?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
