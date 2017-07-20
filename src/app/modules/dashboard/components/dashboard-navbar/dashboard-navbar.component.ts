import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {

  constructor() { }

  navbarVisibility = false;

  ngOnInit() {
  }

  resizeNavbarVisibility() {
    if(screen.width >= 1024) {
      this.navbarVisibility = true;
    } else {
      this.navbarVisibility = false;
    }
  }

  toggleNavbarVisibility() {
    this.navbarVisibility = !this.navbarVisibility;
  }

  navbarStyle() {
    if (screen.width >= 1024) {
      return{'min-height': 'auto', 'max-height': '50px'};
    } else if (this.navbarVisibility) {
      const height = document.getElementsByClassName('navbar-top-level')[0].children.length * 40 + 'px';
      return {'min-height': height, 'max-height': 'auto'};
    } else {
      return {'min-height': '0', 'max-height': '0'};
    }
  }

}
