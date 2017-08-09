import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { DestPageComponent } from './dest-page/dest-page.component'; 
import { FinalViewComponent } from './final-view/final-view.component'; 

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'dest-page/:id',  component: DestPageComponent },
  // { path: 'update',  component: FinalViewComponent },
];

