import { Component } from '@angular/core';
import { APIclientService } from './services/apiclient.service';
import { firstValueFrom } from 'rxjs';
import { PaginatorState } from 'primeng/paginator';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'idsvfe';
activeItem: MenuItem|undefined;
items: MenuItem[]|undefined = [
  {label: 'Images', icon: 'pi pi-fw pi-image', routerLink: ['/images']},
  {label: 'Settings', icon: 'pi pi-fw pi-cog', routerLink: ['/settings']},
];
  

}
