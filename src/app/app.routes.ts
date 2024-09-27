import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HeaderComponent } from './views/header/header.component';

export const routes: Routes = [
    { path: '', redirectTo: '/v', pathMatch: 'full' },
    { 
        path: 'v', 
        component: HeaderComponent, 
        children: [ // Children should be an array of routes
          { path: 'home', component: DashboardComponent } // Default child route
        ]
      },
    { path: '**', redirectTo: '/v' }
];
