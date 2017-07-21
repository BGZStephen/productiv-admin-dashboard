import { Injectable } from '@angular/core';

@Injectable()
export class MenuBuilderService {

  menu: Array<object> = [];

  constructor() { }

  buildNavbar() {
    this.addDefaults();
    return this.menu;
  }

  addDefaults() {

    const usersNavItem = {
      icon: 'fa-users',
      route: '',
      hasSubmenu: true,
      title: 'Users',
      submenu: [
        {
          icon: 'fa-users',
          route: '/dashboard/users/manage',
          title: 'Manage',
        },
        {
          icon: 'fa-plus',
          route: '/dashboard/users/add',
          title: 'Add',
        },
      ],
    };

    const businessesNavItem = {
      icon: 'fa-building-o',
      route: '',
      hasSubmenu: true,
      title: 'Businesses',
      submenu: [
        {
          icon: 'fa-cogs',
          route: '/dashboard/businesses/manage',
          title: 'Manage',
        },
        {
          icon: 'fa-plus',
          route: '/dashboard/businesses/add',
          title: 'Add',
        },
      ],
    };

    const modulesNavItem = {
      icon: 'fa-microchip',
      route: '',
      hasSubmenu: true,
      title: 'Modules',
      submenu: [
        {
          icon: 'fa-cogs',
          route: '/dashboard/modules/manage',
          title: 'Manage',
        },
        {
          icon: 'fa-plus',
          route: '/dashboard/modules/add',
          title: 'Add',
        },
      ],
    };

    const analyticsNavItem = {
      icon: 'fa-area-chart',
      route: '/dashboard/analytics',
      hasSubmenu: false,
      title: 'Analytics',
    };

    this.menu.push(usersNavItem, businessesNavItem, modulesNavItem, analyticsNavItem);
    return;
  }
}
