import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HeaderComponent } from './views/header/header.component';
import { ChannelComponent } from './views/channel/channel.component';

export const routes: Routes = [
    { path: '', redirectTo: '/v', pathMatch: 'full' },
    { 
        path: 'v', 
        component: HeaderComponent, 
        children: [
          { path: 'home', component: DashboardComponent },
          { path: 'channel',  component: ChannelComponent }
        ]
      },
    { path: '**', redirectTo: '/v' }
];
