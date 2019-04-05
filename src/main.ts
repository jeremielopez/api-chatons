import { NestFactory }         from '@nestjs/core';
import { useContainer }        from 'class-validator';
import { BootstrapModule }     from './bootstrap.module';
import { HttpExceptionFilter } from './starter/rest/exception/filter/http-exception.filter';

async function bootstrap() {
    const app = await NestFactory.create(BootstrapModule, { cors: true });
    useContainer(app.select(BootstrapModule), { fallbackOnErrors: true });
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(3000);
}

bootstrap();
