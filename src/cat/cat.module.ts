import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatsService } from './cat.service';
/**
 * 
 * Esta es la manera en la que se pueden crear modulos especificos y no agruparlos todos en 
 * el module principal.
 * 
 */


@Module({
    controllers: [CatController],
    providers: [CatsService]

})
export class CatModule {}
