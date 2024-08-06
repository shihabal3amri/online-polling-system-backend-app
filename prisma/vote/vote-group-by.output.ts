import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VoteCountAggregate } from './vote-count-aggregate.output';
import { VoteMinAggregate } from './vote-min-aggregate.output';
import { VoteMaxAggregate } from './vote-max-aggregate.output';

@ObjectType()
export class VoteGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    pollId!: string;

    @Field(() => String, {nullable:false})
    optionId!: string;

    @Field(() => Date, {nullable:false})
    timestamp!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    isVoted!: boolean;

    @Field(() => VoteCountAggregate, {nullable:true})
    _count?: VoteCountAggregate;

    @Field(() => VoteMinAggregate, {nullable:true})
    _min?: VoteMinAggregate;

    @Field(() => VoteMaxAggregate, {nullable:true})
    _max?: VoteMaxAggregate;
}
