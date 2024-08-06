import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Poll } from '../poll/poll.model';
import { Option } from '../option/option.model';

@ObjectType()
export class Vote {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    pollId!: string;

    @Field(() => String, {nullable:false})
    optionId!: string;

    @Field(() => Date, {nullable:false})
    timestamp!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isVoted!: boolean;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Poll, {nullable:false})
    poll?: Poll;

    @Field(() => Option, {nullable:false})
    option?: Option;
}
