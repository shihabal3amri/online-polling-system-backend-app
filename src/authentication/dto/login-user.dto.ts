import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, Max, MaxLength, MinLength } from 'class-validator';
@InputType()
export class LoginUserDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    username: string;
    
    @Field()
    @IsString()
    @MinLength(8)
    @MaxLength(64)
    password: string;
}