import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminProductAddComponent } from './admin-product-add/admin-product-add.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { AdminProductAddCategoryComponent } from './admin-product-add-category/admin-product-add-category.component';
import { AdminProductEditCategoryComponent } from './admin-product-edit-category/admin-product-edit-category.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SharedModule } from '../shared/shared.module';
import { AdminProductListEditComponent } from './admin-product-list-edit/admin-product-list-edit.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminProductAddComponent,
    AdminProductListComponent,
    AdminProductAddCategoryComponent,
    AdminProductEditCategoryComponent,
    AdminHomeComponent,
    AdminProductListEditComponent],
  imports: [
    SharedModule
  ]
})
export class AdminModule { }
