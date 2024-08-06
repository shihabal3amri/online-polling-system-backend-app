import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PollWhereUniqueInput } from './poll-where-unique.input';
import { Type } from 'class-transformer';
import { PollCreateInput } from './poll-create.input';
import { PollUpdateInput } from './poll-update.input';

@ArgsType()
export class UpsertOnePollArgs {

    @Field(() => PollWhereUniqueInput, {nullable:false})
    @Type(() => PollWhereUniqueInput)
    where!: Prisma.AtLeast<PollWhereUniqueInput, 'id'>;

    @Field(() => PollCreateInput, {nullable:false})
    @Type(() => PollCreateInput)
    create!: PollCreateInput;

    @Field(() => PollUpdateInput, {nullable:false})
    @Type(() => PollUpdateInput)
    update!: PollUpdateInput;
}
