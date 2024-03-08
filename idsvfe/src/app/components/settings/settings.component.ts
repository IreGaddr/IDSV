import { Component } from '@angular/core';
import { APIclientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(public readonly api: APIclientService) { }
  
}
