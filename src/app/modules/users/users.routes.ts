import { Routes, RouterModule } from '@angular/router';

// dashboard module components
import { UsersManageComponent } from './components/users-components-barrel';

const USERS_ROUTES: Routes = [
  {path: 'users', children: [
    {path: '', component: UsersManageComponent},
  ]},
];

export const UsersRoutes = RouterModule.forChild(USERS_ROUTES);
