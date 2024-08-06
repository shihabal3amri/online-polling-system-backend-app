import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsUUID } from "class-validator";

@InputType()
export class UpdateVoteInput {
  @Field()
  @IsUUID()
  voteId: string;

  @Field()
  @IsBoolean()
  isVoted: boolean;
}
