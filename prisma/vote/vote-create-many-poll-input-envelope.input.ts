import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteCreateManyPollInput } from './vote-create-many-poll.input';
import { Type } from 'class-transformer';

@InputType()
export class VoteCreateManyPollInputEnvelope {

    @Field(() => [VoteCreateManyPollInput], {nullable:false})
    @Type(() => VoteCreateManyPollInput)
    data!: Array<VoteCreateManyPollInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
