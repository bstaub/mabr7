import { NgModule } from '@angular/core';
import { UserLoginRegisterSlideComponent } from './user-login-register-slide/user-login-register-slide.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    UserLoginRegisterSlideComponent,
    UserListComponent,
    UserListItemComponent,
    UserDetailComponent,
  ],
  imports: [
    SharedModule,
  ]
})
export class UserModule { }
