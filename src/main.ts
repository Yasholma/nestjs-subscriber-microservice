import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const configService = new ConfigService();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: configService.get('PORT'),
      },
    },
  );

  app.listen(() =>
    console.log(
      `Master Nest running on http://localhost:${configService.get('PORT')}`,
    ),
  );
}
bootstrap();
