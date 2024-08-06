import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';
import { Type } from 'class-transformer';
import { VoteUpdateWithoutOptionInput } from './vote-update-without-option.input';

@InputType()
export class VoteUpdateWithWhereUniqueWithoutOptionInput {

    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id'>;

    @Field(() => VoteUpdateWithoutOptionInput, {nullable:false})
    @Type(() => VoteUpdateWithoutOptionInput)
    data!: VoteUpdateWithoutOptionInput;
}
