import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionCreateManyPollInput } from './option-create-many-poll.input';
import { Type } from 'class-transformer';

@InputType()
export class OptionCreateManyPollInputEnvelope {

    @Field(() => [OptionCreateManyPollInput], {nullable:false})
    @Type(() => OptionCreateManyPollInput)
    data!: Array<OptionCreateManyPollInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
