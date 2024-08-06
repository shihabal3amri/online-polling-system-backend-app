import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PollWhereUniqueInput } from './poll-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePollArgs {

    @Field(() => PollWhereUniqueInput, {nullable:false})
    @Type(() => PollWhereUniqueInput)
    where!: Prisma.AtLeast<PollWhereUniqueInput, 'id'>;
}
