import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class RefreshToken {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:false})
    timestamp!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isArchived!: boolean;

    @Field(() => Date, {nullable:true})
    archivedAt!: Date | null;

    @Field(() => User, {nullable:false})
    user?: User;
}
