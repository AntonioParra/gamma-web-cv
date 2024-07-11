import { Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: ':id', component: CvComponent },
];
