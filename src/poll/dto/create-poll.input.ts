import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsString, IsArray, ValidateNested, IsDateString, ArrayMinSize, MinLength, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class CreateOptionInput {
  @Field()
  @IsString()
  @MinLength(1, { message: 'Text should not be empty' })
  @MaxLength(250, { message: 'Text should not exceed 250 characters' })
  text: string;
}

@InputType()
export class CreatePollInput {
  @Field()
  @IsString()
  @MinLength(1, { message: 'Title should not be empty' })
  @MaxLength(250, { message: 'Title should not exceed 250 characters' })
  title: string;

  @Field()
  @IsBoolean()
  isMultipleOptions: boolean;

  @Field()
  @IsDateString({}, { message: 'willEndAt must be a valid ISO 8601 date string' })
  willEndAt: string;

  @Field(() => [CreateOptionInput])
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(2, { message: 'Options array should have at least two items' })
  @Type(() => CreateOptionInput)
  options: CreateOptionInput[];
}
