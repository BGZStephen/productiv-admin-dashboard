import { Routes, RouterModule } from '@angular/router';

// dashboard module components
import { DashboardViewComponent, DashboardNavbarComponent } from './components/dashboard-components-barrel';

// dashboard module components
import { UsersManageComponent } from '../users/components/users-components-barrel';

const DASHBOARD_ROUTES: Routes = [
  {path: 'dashboard', component: DashboardViewComponent, children: [
    {path: '', redirectTo: 'users', pathMatch: 'full'},
    {path: 'users', children: [
      {path: '', redirectTo: 'manage', pathMatch: 'full'},
      {path: 'manage', component: UsersManageComponent},
      {path: 'add', component: UsersManageComponent}
    ]},
    {path: 'businesses', children: [
      {path: '', redirectTo: 'manage', pathMatch: 'full'},
      {path: 'manage', component: UsersManageComponent},
      {path: 'add', component: UsersManageComponent}
    ]},
    {path: 'modules', children: [
      {path: '', redirectTo: 'manage', pathMatch: 'full'},
      {path: 'manage', component: UsersManageComponent},
      {path: 'add', component: UsersManageComponent}
    ]},
    {path: 'analytics', component: UsersManageComponent},
  ]},
];

export const DashboardRoutes = RouterModule.forChild(DASHBOARD_ROUTES);
