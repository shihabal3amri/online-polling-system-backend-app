import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VoteCreateManyInput } from './vote-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVoteArgs {

    @Field(() => [VoteCreateManyInput], {nullable:false})
    @Type(() => VoteCreateManyInput)
    data!: Array<VoteCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
