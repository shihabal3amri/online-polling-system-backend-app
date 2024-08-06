import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutVotesInput } from './user-update-without-votes.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutVotesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutVotesInput, {nullable:false})
    @Type(() => UserUpdateWithoutVotesInput)
    data!: UserUpdateWithoutVotesInput;
}
