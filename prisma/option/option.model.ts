import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Vote } from '../vote/vote.model';
import { Poll } from '../poll/poll.model';
import { OptionCount } from './option-count.output';

@ObjectType()
export class Option {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    pollId!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:false})
    timestamp!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Vote], {nullable:true})
    votes?: Array<Vote>;

    @Field(() => Poll, {nullable:false})
    poll?: Poll;

    @Field(() => OptionCount, {nullable:false})
    _count?: OptionCount;
}
