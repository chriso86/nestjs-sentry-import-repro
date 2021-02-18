import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('TYPEORM_HOST'),
        port: configService.get<number>('TYPEORM_PORT'),
        username: configService.get<string>('TYPEORM_USERNAME'),
        password: configService.get<string>('TYPEORM_PASSWORD'),
        database: configService.get<string>('TYPEORM_DATABASE'),
        entities: [__dirname + '/' + configService.get<string>('TYPEORM_ENTITIES')],
        synchronize: configService.get('TYPEORM_SYNCHRONIZE') === 'true', // doing `.get<boolean>` doesn't return boolean
        migrationsRun: configService.get('TYPEORM_MIGRATIONS_RUN') === 'true', // doing `.get<boolean>` doesn't return boolean
        migrations: [__dirname + '/' + configService.get<string>('TYPEORM_MIGRATIONS')],
        cli: {
          migrationsDir: configService.get<string>('TYPEORM_MIGRATIONS_DIR'),
        },
        logging: configService.get<boolean>('TYPEORM_LOGGING'),
        ssl: configService.get('TYPEORM_USE_SSL') === 'true',
      }),
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(),
    TagsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
