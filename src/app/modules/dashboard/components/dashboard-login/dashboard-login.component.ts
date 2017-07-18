import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.scss']
})
export class DashboardLoginComponent implements OnInit {

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
  }

  login(userObject) {
    this.apiService.login(userObject)
    .subscribe(res => {
      console.log(res)
    },
    error => {
      console.log(error)
    })
  }

}
