import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteCreateManyOptionInput } from './vote-create-many-option.input';
import { Type } from 'class-transformer';

@InputType()
export class VoteCreateManyOptionInputEnvelope {

    @Field(() => [VoteCreateManyOptionInput], {nullable:false})
    @Type(() => VoteCreateManyOptionInput)
    data!: Array<VoteCreateManyOptionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
