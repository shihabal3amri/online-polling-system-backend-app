import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRefreshTokensInput } from '../user/user-create-nested-one-without-refresh-tokens.input';

@InputType()
export class RefreshTokenCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:true})
    timestamp?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isArchived?: boolean;

    @Field(() => Date, {nullable:true})
    archivedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutRefreshTokensInput, {nullable:false})
    user!: UserCreateNestedOneWithoutRefreshTokensInput;
}
