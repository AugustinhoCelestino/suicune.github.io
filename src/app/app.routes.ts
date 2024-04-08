import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { SetupComponent } from './features/setup/setup';
import { ToYmlComponent } from './features/conversions/toYMF/toyml';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'setup', component: SetupComponent },
    { path: 'toyml', component: ToYmlComponent },
];
