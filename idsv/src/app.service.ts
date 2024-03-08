import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as sharp  from 'sharp';

const img_path = 'C:\\code\\porfolio\\goldentrig\\trainv2\\1-10k';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
    }
    getImgPath(): string {
      return img_path;
    }
    async getPngFiles(path: string): Promise<string[]> {

      const files = await fs.readdir(path);
  
      const pngFiles = [];
  
      for(const file of files) {
        if (file.endsWith('.png')) {
          pngFiles.push(`${path}\\${file}`);
        }
      }
  
      return pngFiles;
  
    }
    
    async getFullImage(filename: string): Promise<Buffer> {
      return fs.readFile(filename);
    }
    
    async getThumbnail(filename: string): Promise<Buffer> {

      const img = await sharp(filename)
        .resize(200, 200)
        .toBuffer();
    
      return img;
    
    }
  }
