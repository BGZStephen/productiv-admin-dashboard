import { Component, OnInit } from '@angular/core';
import { ProductivApiService } from '../../../../services/productiv-api.service';

@Component({
  selector: 'app-users-manage',
  templateUrl: './users-manage.component.html',
  styleUrls: ['./users-manage.component.scss']
})
export class UsersManageComponent implements OnInit {

  users: Array<object>

  constructor(
    private apiService: ProductivApiService
  ) {}

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.apiService.getUsers()
    .subscribe(res => {
      console.log(res.json())
    },
    error => {
      console.log(error)
    })
  }

}
