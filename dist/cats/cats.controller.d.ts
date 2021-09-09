import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';
export declare class CatsController {
    findAll(): string;
    create(createCatDto: CreateCatDto): Promise<string>;
    findOne(): string;
    find(request: Request): string;
    findParam(world: string): string;
    update(id: string, updateCatDto: CreateCatDto): string;
    remove(id: string): string;
}
