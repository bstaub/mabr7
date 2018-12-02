import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductGridComponent} from './product-grid/product-grid.component';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';


const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'grid',
    pathMatch: 'full'
  },
  {path: 'grid', component: ProductGridComponent},
  {path: 'list', component: ProductListComponent},
  {path: 'detail/:id/:category/:name', component: ProductDetailComponent},
  {path: 'detail/:id/edit', component: ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(PRODUCT_ROUTES)],
  exports: [RouterModule]
})

export class ProductRoutingModule {}
