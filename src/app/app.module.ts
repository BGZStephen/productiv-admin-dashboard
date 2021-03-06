import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// services
import { NotificationService } from './services/notification.service';
import { MenuBuilderService } from './services/menu-builder.service'
import { ProductivApiService } from './services/productiv-api.service'

// modules
import { DashboardModule } from './modules/dashboard/dashboard.module';

// Routes
import { AppRoutes } from './app.routes';

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    DashboardModule,
  ],
  providers: [NotificationService, MenuBuilderService, ProductivApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
