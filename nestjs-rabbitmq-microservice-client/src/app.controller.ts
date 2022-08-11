import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<any> {
    return this.appService.getHello();
  }
  @Get('async')
  getHelloAsync(): Promise<any> {
    return this.appService.getHelloAsync();
  }

  @Post()
  async publish(): Promise<any> {
    await this.appService.publishEvent();
    return new Promise((resolve, reject) => {
      resolve({message: 'ok'})
    });
  }
}
