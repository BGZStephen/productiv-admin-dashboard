import { Routes, RouterModule } from '@angular/router';

import { DashboardLoginComponent } from './modules/dashboard/components/dashboard-login/dashboard-login.component'

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: DashboardLoginComponent},
  {path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'}
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES)
