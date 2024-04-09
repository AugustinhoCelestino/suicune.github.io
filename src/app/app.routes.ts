import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { SetupComponent } from './features/setup/setup';
import { ToYmlComponent } from './features/conversions/toYMF/toymf.component';
import { ToMapsComponent } from './features/conversions/toMAPS/tomaps.component';
import { ToPegasusComponent } from './features/conversions/toPEGASUS/topegasus.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'setup', component: SetupComponent },
    { path: 'toymf', component: ToYmlComponent },
    { path: 'tomaps', component: ToMapsComponent },
    { path: 'topegasus', component: ToPegasusComponent },
];
