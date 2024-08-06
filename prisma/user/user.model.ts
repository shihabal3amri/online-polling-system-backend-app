import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RefreshToken } from '../refresh-token/refresh-token.model';
import { Vote } from '../vote/vote.model';
import { Poll } from '../poll/poll.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:false})
    timestamp!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [RefreshToken], {nullable:true})
    refreshTokens?: Array<RefreshToken>;

    @Field(() => [Vote], {nullable:true})
    votes?: Array<Vote>;

    @Field(() => [Poll], {nullable:true})
    polls?: Array<Poll>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
