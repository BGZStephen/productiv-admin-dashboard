import { Component, OnInit } from '@angular/core';
import { MenuBuilderService } from '../../../../services/menu-builder.service'

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {

  constructor(
    private menuBuilderService: MenuBuilderService,
  ) { }

  navbar: Array<object>;
  activeSubmenu: number = -1;
  navbarVisibility = false;

  ngOnInit() {
    this.navbar = this.menuBuilderService.buildNavbar()
  }

  resizeNavbarVisibility() {
    if (screen.width >= 1024) {
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
      return {'max-height': 'calc(100vh - 50px)', 'visibiloty': '1', 'opacity': '1'};
    } else {
      return {'max-height': '0', 'visibiloty': '0', 'opacity': '0'};
    }
  }

  setActiveSubmenu(index) {
    if (this.activeSubmenu === index) {
      this.activeSubmenu = -1;
    } else {
      this.activeSubmenu = index;
    }
  }

  submenuStyle(index) {
    if (this.activeSubmenu === index) {
      const height = document.getElementsByClassName('navbar-top-level-container')[index]
                             .getElementsByClassName('navbar-second-level')[0].children.length * 50 + 'px';
      return {'min-height': height, 'max-height': 'auto'};
    } else {
      return {'min-height': '0', 'max-height': '0'};
    }
  }

}
