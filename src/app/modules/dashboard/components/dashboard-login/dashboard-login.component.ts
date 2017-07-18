import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NotificationService } from '../../../../helpers/notification.service';

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.scss']
})
export class DashboardLoginComponent implements OnInit {

  constructor(
    private apiService: ApiService,
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
