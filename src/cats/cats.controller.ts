import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import {Request} from 'express';
import { CreateCatDto } from './create-cat.dto';

/**
 * 
 * Este controlador si colocamos algo dentro de los parentesis es la ruta 
 * ej :
 * http://localhost:3000/cats
 * 
 */
@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return 'This action return all cats';
    }


    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';


    }
    /**
     * cuando le agregamos al tipo de peticion algo, quiere decir que es una subruta de la principal
     * Ej:
     * http://localhost:3000/cats/oneGat
     */
    @Get('oneGat')
    findOne(): string {
        return 'This action return One Cat';
    }

    @Get('onePetname')
    /**
     * Con el Req usamos el request, el cual 
     * podemos acceder a el body en este caso
     */
    find(@Req() request: Request ): string {
        const {world} = request.body;
        console.log(request.body);
        
        return `This is un example ${world}`;
    }

    /**
     * 
     * Este es un ejemplo de como se puede manejar los parametros en una peticion.
     */
    // @Get('onePetname/:world')
    // findParam(@Param() params): string {
    //     const {world} = params;
    //     return `This is un example ${world}`;


    // }
    /**
     * 
     * Este es un ejemplo de como se puede manejar los parametros en una peticion.
     * pero en este caso se le agrega al decorador el id para sacarlo directamente.
     */
     @Get('onePetname/:world')
     findParam(@Param('world') world: string): string{
         return `This is un example ${world}`;
 
 
     }


     @Put(':id')
     update(@Param('id') id: string, @Body() updateCatDto: CreateCatDto) {
       return `This action updates a #${id} cat`;
     }
   
     @Delete(':id')
     remove(@Param('id') id: string) {
       return `This action removes a #${id} cat`;
     }
}
