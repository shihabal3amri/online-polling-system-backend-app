import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { PrismaService } from './prisma/prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { PollModule } from './poll/poll.module';
import { VoteModule } from './vote/vote.module';
import { PrismaModule } from './prisma/prisma.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    AuthenticationModule,
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      subscriptions: {
        'subscriptions-transport-ws': {
          path: '/graphql',
          onConnect: async (connectionParams: any) => {
            const token = connectionParams.Authorization || '';
            const jwtService = new JwtService({ secret: process.env.ACCESS_TOKEN_SECRET });
            try {
              const user = await jwtService.verifyAsync(token.replace('Bearer ', ''));
              return {
                req: {
                  headers: {
                    authorization: token,
                  }
                }
              }
            } catch (err) {
              throw new Error('Unauthorized');
            }
          },
        },
      },
    }),
    PollModule,
    VoteModule,
  ],
  controllers: [AppController],
  exports: [PrismaService],
  providers: [AppService, PrismaService, AppResolver],
})
export class AppModule { }
