import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API - Välkommen till Music Tracks API!';
  }
}
