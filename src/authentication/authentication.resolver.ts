import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from 'prisma/user/user.model';
import { AuthenticationPayload } from './model/authentication-payload.model';

@Resolver()
export class AuthenticationResolver {
    constructor(private readonly authService: AuthenticationService) { }

    @Mutation(() => User, { name: 'signup' })
    async signup(@Args('createUserDto') createUserDto: CreateUserDto) {
        return await this.authService.signup(createUserDto.username, createUserDto.email, createUserDto.password);
    }

    @Mutation(() => AuthenticationPayload, { name: 'login' })
    async login(@Args('loginUserDto') loginUserDto: LoginUserDto) {
        return await this.authService.login(loginUserDto.username, loginUserDto.password);
    }

    @Mutation(() => AuthenticationPayload, { name: 'refresh' })
    async refresh(@Args('refreshToken') refreshToken: string) {
        return await this.authService.refreshToken(refreshToken);
    }

}
