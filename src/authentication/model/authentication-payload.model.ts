import {ObjectType, Field} from '@nestjs/graphql';

@ObjectType()
export class AuthenticationPayload {
    @Field()
    accessToken: string;

    @Field()
    refreshToken: string;
}