import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCatDto } from 'src/cats/create-cat.dto';
import { CatsService } from './cat.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cat')
export class CatController {
constructor(private CatsService: CatsService){}


@Post()
async create(@Body() createCatDto:CreateCatDto){
    this.CatsService.create(createCatDto);

}
@Get()
async findAll(): Promise<Cat[]>{
    return this.CatsService.findAll();


}
}
