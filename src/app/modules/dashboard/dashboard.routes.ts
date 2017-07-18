import { Routes, RouterModule } from '@angular/router';

import { DashboardViewComponent, DashboardHomeComponent, DashboardNavbarComponent,
         DashboardNotificationBarComponent} from './components/dashboard-components-barrel'

const DASHBOARD_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: DashboardViewComponent},
  {path: 'home', component: DashboardHomeComponent, outlet: 'dashboardOutlet'},
]

export const DashboardRoutes = RouterModule.forChild(DASHBOARD_ROUTES)
