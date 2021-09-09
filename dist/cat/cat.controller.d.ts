import { CreateCatDto } from 'src/cats/create-cat.dto';
import { CatsService } from './cat.service';
import { Cat } from './interfaces/cat.interface';
export declare class CatController {
    private CatsService;
    constructor(CatsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<void>;
    findAll(): Promise<Cat[]>;
}
