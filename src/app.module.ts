import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatController } from './cat/cat.controller';
import { CatModule } from './cat/cat.module';
import { logger, LoggerMiddleware } from './logger.moddleware';

@Module({
  imports: [CatModule],
 
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(logger)
    .exclude({path: 'cat', method: RequestMethod.POST})
    .forRoutes(CatController)

  }



}
