import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminGuard } from './guards/admin.guard';


export const USER_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {path: 'detail/:id', component: UserDetailComponent},
  {path: 'list', component: UserListComponent, canActivate: [AdminGuard]},
  {path: 'profile', component: ProfileComponent},
];
