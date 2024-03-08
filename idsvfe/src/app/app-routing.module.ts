import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { ImagesComponent } from './components/images/images.component';


const routes: Routes = [
  { path: '', redirectTo: '/images', pathMatch: 'full' },
  { path: 'settings', component: SettingsComponent },
  { path: 'images', component: ImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
