import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Option } from '../option/option.model';
import { Vote } from '../vote/vote.model';
import { User } from '../user/user.model';
import { PollCount } from './poll-count.output';

@ObjectType()
export class Poll {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPollEndedByUser!: boolean;

    @Field(() => Date, {nullable:false})
    willEndAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isMultipleOptions!: boolean;

    @Field(() => Date, {nullable:false})
    timestamp!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Option], {nullable:true})
    options?: Array<Option>;

    @Field(() => [Vote], {nullable:true})
    votes?: Array<Vote>;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => PollCount, {nullable:false})
    _count?: PollCount;
}
