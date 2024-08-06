import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OptionCreateManyInput } from './option-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyOptionArgs {

    @Field(() => [OptionCreateManyInput], {nullable:false})
    @Type(() => OptionCreateManyInput)
    data!: Array<OptionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
