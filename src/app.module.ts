import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthorModule } from './domain/enterprise/author/author.module';
import { BookModule } from './domain/enterprise/book/book.module';
import { DatabaseModule } from './infra/database/database.module';
import { EnvModule } from './helpers/env/env.module';

import { envSchema } from './helpers/env/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    EnvModule,
    DatabaseModule,
    AuthorModule,
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
