import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviornment';

@Injectable({
  providedIn: 'root'
})
export class APIclientService {

  constructor(private readonly http: HttpClient) { }

  get imagesDirectory(): string {
    return localStorage.getItem('imagesDirectory') ?? '';
  }

  set imagesDirectory(value: string) {
    localStorage.setItem('imagesDirectory', value);
  }
  
  getImages() {
    return this.http.get<string[]>(`${environment.API_URL}/images?directory=${this.imagesDirectory}`);
  }
}
