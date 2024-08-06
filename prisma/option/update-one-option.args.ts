import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OptionUpdateInput } from './option-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OptionWhereUniqueInput } from './option-where-unique.input';

@ArgsType()
export class UpdateOneOptionArgs {

    @Field(() => OptionUpdateInput, {nullable:false})
    @Type(() => OptionUpdateInput)
    data!: OptionUpdateInput;

    @Field(() => OptionWhereUniqueInput, {nullable:false})
    @Type(() => OptionWhereUniqueInput)
    where!: Prisma.AtLeast<OptionWhereUniqueInput, 'id'>;
}
