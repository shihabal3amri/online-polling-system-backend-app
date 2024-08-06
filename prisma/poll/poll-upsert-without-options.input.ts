import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PollUpdateWithoutOptionsInput } from './poll-update-without-options.input';
import { Type } from 'class-transformer';
import { PollCreateWithoutOptionsInput } from './poll-create-without-options.input';
import { PollWhereInput } from './poll-where.input';

@InputType()
export class PollUpsertWithoutOptionsInput {

    @Field(() => PollUpdateWithoutOptionsInput, {nullable:false})
    @Type(() => PollUpdateWithoutOptionsInput)
    update!: PollUpdateWithoutOptionsInput;

    @Field(() => PollCreateWithoutOptionsInput, {nullable:false})
    @Type(() => PollCreateWithoutOptionsInput)
    create!: PollCreateWithoutOptionsInput;

    @Field(() => PollWhereInput, {nullable:true})
    @Type(() => PollWhereInput)
    where?: PollWhereInput;
}
