import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionCreateWithoutVotesInput } from './option-create-without-votes.input';
import { Type } from 'class-transformer';
import { OptionCreateOrConnectWithoutVotesInput } from './option-create-or-connect-without-votes.input';
import { OptionUpsertWithoutVotesInput } from './option-upsert-without-votes.input';
import { Prisma } from '@prisma/client';
import { OptionWhereUniqueInput } from './option-where-unique.input';
import { OptionUpdateToOneWithWhereWithoutVotesInput } from './option-update-to-one-with-where-without-votes.input';

@InputType()
export class OptionUpdateOneRequiredWithoutVotesNestedInput {

    @Field(() => OptionCreateWithoutVotesInput, {nullable:true})
    @Type(() => OptionCreateWithoutVotesInput)
    create?: OptionCreateWithoutVotesInput;

    @Field(() => OptionCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => OptionCreateOrConnectWithoutVotesInput)
    connectOrCreate?: OptionCreateOrConnectWithoutVotesInput;

    @Field(() => OptionUpsertWithoutVotesInput, {nullable:true})
    @Type(() => OptionUpsertWithoutVotesInput)
    upsert?: OptionUpsertWithoutVotesInput;

    @Field(() => OptionWhereUniqueInput, {nullable:true})
    @Type(() => OptionWhereUniqueInput)
    connect?: Prisma.AtLeast<OptionWhereUniqueInput, 'id'>;

    @Field(() => OptionUpdateToOneWithWhereWithoutVotesInput, {nullable:true})
    @Type(() => OptionUpdateToOneWithWhereWithoutVotesInput)
    update?: OptionUpdateToOneWithWhereWithoutVotesInput;
}
