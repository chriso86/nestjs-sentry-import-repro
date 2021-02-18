import { NestFactory } from '@nestjs/core';
import { CrudConfigService } from '@nestjsx/crud';

CrudConfigService.load({
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    }
  },
  query: {
    maxLimit: 100,
    alwaysPaginate: true,
  },
  auth: {
    property: 'user',
  },
});

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log']
  });
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
