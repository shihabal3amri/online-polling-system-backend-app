import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PollUpdateInput } from './poll-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PollWhereUniqueInput } from './poll-where-unique.input';

@ArgsType()
export class UpdateOnePollArgs {

    @Field(() => PollUpdateInput, {nullable:false})
    @Type(() => PollUpdateInput)
    data!: PollUpdateInput;

    @Field(() => PollWhereUniqueInput, {nullable:false})
    @Type(() => PollWhereUniqueInput)
    where!: Prisma.AtLeast<PollWhereUniqueInput, 'id'>;
}
