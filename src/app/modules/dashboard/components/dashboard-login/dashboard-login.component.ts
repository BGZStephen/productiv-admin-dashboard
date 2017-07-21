import { Component, OnInit } from '@angular/core';
import { ProductivApiService } from '../../../../services/productiv-api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NotificationService } from '../../../../services/notification.service';

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.scss']
})
export class DashboardLoginComponent implements OnInit {

  constructor(
    private apiService: ProductivApiService,
    private flashMessagesService: FlashMessagesService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
  }

  login(userObject) {
    this.apiService.login(userObject)
    .subscribe(res => {
      this.notificationService.flashSuccess('Login successful');
    },
    error => {
      this.notificationService.flashError('Login failed');
    });
  }

}
