import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('images')
  async getPngFiles(@Req() request: Request) {
    const { directory } = request.query;
    return this.appService.getPngFiles(directory as string);
  }
  
  @Get('fullimage')
  async getFullImage(@Req() request: Request, @Res() response: Response) {

    const { filename } = request.query;

    const imageBuffer = await this.appService.getFullImage(filename as string);

    response.type('image/png');
    return response.send(imageBuffer);

  }

  @Get('thumbnail')
  async getThumbnail(@Req() request: Request, @Res() response: Response) {

    const { filename } = request.query;

    const imageBuffer = await this.appService.getThumbnail(filename as string);

    response.type('image/png');
    return response.send(imageBuffer);

  }
}
