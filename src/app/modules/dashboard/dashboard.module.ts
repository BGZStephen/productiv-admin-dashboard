import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { DashboardHomeComponent, DashboardNotificationBarComponent, DashboardNavbarComponent,
         DashboardViewComponent, DashboardLoginComponent} from './components/dashboard-components-barrel'

//  routes
import { DashboardRoutes } from './dashboard.routes';

// services
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    DashboardHomeComponent,
    DashboardNotificationBarComponent,
    DashboardNavbarComponent,
    DashboardViewComponent,
    DashboardLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardRoutes,
  ],
  providers: [ApiService],
})
export class DashboardModule { }
