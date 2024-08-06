import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';
import { Type } from 'class-transformer';
import { VoteUpdateWithoutOptionInput } from './vote-update-without-option.input';
import { VoteCreateWithoutOptionInput } from './vote-create-without-option.input';

@InputType()
export class VoteUpsertWithWhereUniqueWithoutOptionInput {

    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id'>;

    @Field(() => VoteUpdateWithoutOptionInput, {nullable:false})
    @Type(() => VoteUpdateWithoutOptionInput)
    update!: VoteUpdateWithoutOptionInput;

    @Field(() => VoteCreateWithoutOptionInput, {nullable:false})
    @Type(() => VoteCreateWithoutOptionInput)
    create!: VoteCreateWithoutOptionInput;
}
