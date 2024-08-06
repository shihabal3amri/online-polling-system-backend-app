import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PollCountAggregate } from './poll-count-aggregate.output';
import { PollMinAggregate } from './poll-min-aggregate.output';
import { PollMaxAggregate } from './poll-max-aggregate.output';

@ObjectType()
export class PollGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Boolean, {nullable:false})
    isPollEndedByUser!: boolean;

    @Field(() => Date, {nullable:false})
    willEndAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    isMultipleOptions!: boolean;

    @Field(() => Date, {nullable:false})
    timestamp!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PollCountAggregate, {nullable:true})
    _count?: PollCountAggregate;

    @Field(() => PollMinAggregate, {nullable:true})
    _min?: PollMinAggregate;

    @Field(() => PollMaxAggregate, {nullable:true})
    _max?: PollMaxAggregate;
}
