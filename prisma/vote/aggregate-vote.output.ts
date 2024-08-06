import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VoteCountAggregate } from './vote-count-aggregate.output';
import { VoteMinAggregate } from './vote-min-aggregate.output';
import { VoteMaxAggregate } from './vote-max-aggregate.output';

@ObjectType()
export class AggregateVote {

    @Field(() => VoteCountAggregate, {nullable:true})
    _count?: VoteCountAggregate;

    @Field(() => VoteMinAggregate, {nullable:true})
    _min?: VoteMinAggregate;

    @Field(() => VoteMaxAggregate, {nullable:true})
    _max?: VoteMaxAggregate;
}
