import { Injectable } from '@nestjs/common';

/**
 * Forma de declarar un servicio y como se retorna
 * 
 * 
 */

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
