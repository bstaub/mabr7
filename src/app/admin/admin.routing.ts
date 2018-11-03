import { Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProductAddComponent } from './admin-product-add/admin-product-add.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { AdminProductAddCategoryComponent } from './admin-product-add-category/admin-product-add-category.component';
import { AdminProductEditCategoryComponent } from './admin-product-edit-category/admin-product-edit-category.component';



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
];
