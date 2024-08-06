import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';
import { Type } from 'class-transformer';
import { VoteUpdateWithoutUserInput } from './vote-update-without-user.input';
import { VoteCreateWithoutUserInput } from './vote-create-without-user.input';

@InputType()
export class VoteUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id'>;

    @Field(() => VoteUpdateWithoutUserInput, {nullable:false})
    @Type(() => VoteUpdateWithoutUserInput)
    update!: VoteUpdateWithoutUserInput;

    @Field(() => VoteCreateWithoutUserInput, {nullable:false})
    @Type(() => VoteCreateWithoutUserInput)
    create!: VoteCreateWithoutUserInput;
}
