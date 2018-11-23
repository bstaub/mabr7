import { Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProductAddComponent } from './admin-product-add/admin-product-add.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { AdminProductAddCategoryComponent } from './admin-product-add-category/admin-product-add-category.component';
import { AdminProductEditCategoryComponent } from './admin-product-edit-category/admin-product-edit-category.component';
import { UserComponent } from '../user/user.component';
import { USER_ROUTES } from '../user/user.routing';
import { Auth2Guard } from '../user/guards/auth2.guard';
import { UserDetailComponent } from '../user/user-detail/user-detail.component';



export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home', component: AdminHomeComponent},
  {path: 'add', component: AdminProductAddComponent},
  {path: 'list', component: AdminProductListComponent},
  {path: 'add-category', component: AdminProductAddCategoryComponent},
  {path: 'edit-category', component: AdminProductEditCategoryComponent},
  {path: 'users', component: UserComponent, children: USER_ROUTES, canActivate: [Auth2Guard]},
  {path: 'detail/:id', component: UserDetailComponent},
];
