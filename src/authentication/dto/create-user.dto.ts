import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { LoginUserDto } from './login-user.dto';
import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class CreateUserDto extends LoginUserDto {
    @Field()
    @IsEmail()
    email: string;
}