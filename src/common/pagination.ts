import { Field, InputType } from "@nestjs/graphql";
import { IsNumber, IsPositive, Max, Min } from "class-validator";
@InputType()
export class PaginationInput {
    @Field()
    @IsNumber()
    @Min(1)
    @Max(200)
    take: number = 50;
    
    @Field()
    @IsNumber()
    @Min(0)
    skip: number = 0;
}