import { Routes, RouterModule } from '@angular/router';

// dashboard module components
import { DashboardViewComponent, DashboardNavbarComponent } from './components/dashboard-components-barrel';

const DASHBOARD_ROUTES: Routes = [
  {path: 'dashboard', component: DashboardViewComponent, children: [
    {path: '', redirectTo: 'users', pathMatch: 'full'},
    {path: 'users', loadChildren: '../users/users.module#UsersModule'},
  ]},
];

export const DashboardRoutes = RouterModule.forChild(DASHBOARD_ROUTES);
