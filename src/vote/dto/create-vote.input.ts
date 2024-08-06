import { Field, InputType } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

@InputType()
export class CreateVoteInput {
    @Field()
    @IsUUID()
    optionId: string;

    @Field()
    @IsUUID()
    pollId: string;
}
