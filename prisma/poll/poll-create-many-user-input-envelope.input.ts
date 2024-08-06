import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PollCreateManyUserInput } from './poll-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PollCreateManyUserInputEnvelope {

    @Field(() => [PollCreateManyUserInput], {nullable:false})
    @Type(() => PollCreateManyUserInput)
    data!: Array<PollCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
