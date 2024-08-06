import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PollCountAggregate } from './poll-count-aggregate.output';
import { PollMinAggregate } from './poll-min-aggregate.output';
import { PollMaxAggregate } from './poll-max-aggregate.output';

@ObjectType()
export class AggregatePoll {

    @Field(() => PollCountAggregate, {nullable:true})
    _count?: PollCountAggregate;

    @Field(() => PollMinAggregate, {nullable:true})
    _min?: PollMinAggregate;

    @Field(() => PollMaxAggregate, {nullable:true})
    _max?: PollMaxAggregate;
}
