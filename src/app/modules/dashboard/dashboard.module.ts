import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

// modules
import { UsersModule } from '../users/users.module';
import { ModulesModule } from '../modules/modules.module';
import { AnalyticsModule } from '../analytics/analytics.module';
import { BusinessesModule } from '../businesses/businesses.module';

// components
import { DashboardNavbarComponent, DashboardViewComponent, DashboardLoginComponent} from './components/dashboard-components-barrel';

//  routes
import { DashboardRoutes } from './dashboard.routes';

// services
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    DashboardNavbarComponent,
    DashboardViewComponent,
    DashboardLoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    DashboardRoutes,
    UsersModule,
    ModulesModule,
    AnalyticsModule,
    BusinessesModule,
  ],
  providers: [ApiService],
})
export class DashboardModule { }
