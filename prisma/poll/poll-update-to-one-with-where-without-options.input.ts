import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PollWhereInput } from './poll-where.input';
import { Type } from 'class-transformer';
import { PollUpdateWithoutOptionsInput } from './poll-update-without-options.input';

@InputType()
export class PollUpdateToOneWithWhereWithoutOptionsInput {

    @Field(() => PollWhereInput, {nullable:true})
    @Type(() => PollWhereInput)
    where?: PollWhereInput;

    @Field(() => PollUpdateWithoutOptionsInput, {nullable:false})
    @Type(() => PollUpdateWithoutOptionsInput)
    data!: PollUpdateWithoutOptionsInput;
}
