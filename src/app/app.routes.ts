import { Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'cv', component: CvComponent },
];
