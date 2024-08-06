import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OptionWhereUniqueInput } from './option-where-unique.input';
import { Type } from 'class-transformer';
import { OptionCreateInput } from './option-create.input';
import { OptionUpdateInput } from './option-update.input';

@ArgsType()
export class UpsertOneOptionArgs {

    @Field(() => OptionWhereUniqueInput, {nullable:false})
    @Type(() => OptionWhereUniqueInput)
    where!: Prisma.AtLeast<OptionWhereUniqueInput, 'id'>;

    @Field(() => OptionCreateInput, {nullable:false})
    @Type(() => OptionCreateInput)
    create!: OptionCreateInput;

    @Field(() => OptionUpdateInput, {nullable:false})
    @Type(() => OptionUpdateInput)
    update!: OptionUpdateInput;
}
