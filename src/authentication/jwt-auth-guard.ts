import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly jwtService: JwtService) {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const { req, connection } = ctx.getContext();
    if (connection) {
      return connection.context;
    }

    return req;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { req, connection } = ctx.getContext();

    if (connection) {
      const authToken = connection.context.Authorization;
      if (!authToken) {
        throw new UnauthorizedException('Missing auth token!');
      }

      const token = authToken.replace('Bearer ', '');
      try {
        const user = await this.jwtService.verifyAsync(token);
        connection.context.user = user;
      } catch (err) {
        throw new UnauthorizedException('Invalid auth token!');
      }

      return true;
    }

    return super.canActivate(context) as Promise<boolean>;
  }
}
