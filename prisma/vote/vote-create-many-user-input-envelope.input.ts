import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteCreateManyUserInput } from './vote-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class VoteCreateManyUserInputEnvelope {

    @Field(() => [VoteCreateManyUserInput], {nullable:false})
    @Type(() => VoteCreateManyUserInput)
    data!: Array<VoteCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
