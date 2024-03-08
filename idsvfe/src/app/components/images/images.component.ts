import { Component } from '@angular/core';
import { PanZoomConfig } from 'ngx-panzoom';
import { PaginatorState } from 'primeng/paginator';
import { firstValueFrom } from 'rxjs';
import { APIclientService } from 'src/app/services/apiclient.service';

type Imagetype = { src: string, filename?: string, selected: boolean };
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent{
  first: number = 0;
  rows: number = 16;
  images: Imagetype[] = [];
  displayImages: Imagetype[] = [];
  rowsPerPageOptions: any[] | undefined = [16, 32, 64];
  selectedImage: Imagetype | undefined;
  panZoomConfig: PanZoomConfig = new PanZoomConfig({scalePerZoomLevel: 2.0, zoomLevels: 10, freeMouseWheelFactor: 0.01});
  
  get showPreview() {
    return this.selectedImage !== undefined;
  }

  set showPreview(value: boolean) {
    if (!value) {
      this.selectedImage = undefined;
      }
  }

  get selectedImages() {
    return this.images.filter((img) => img.selected).length;
  }

  constructor(private readonly api: APIclientService) {
    this.getimagelist();
  }

  async getimagelist() {
    this.images = (await firstValueFrom(this.api.getImages())).map((src: string) => ({ src, filename: src.split('\\').pop(), selected: false }));
    this.updateImages();
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 0;
    this.updateImages();
  }

  updateImages() {
    this.displayImages = this.images.slice(this.first, (this.first ?? 0) + (this.rows ?? 0));
  }

  selectImage(event: any, image: Imagetype) {
    this.selectedImage = image;
    event.stopPropagation();
    event.preventDefault();
  }
}
