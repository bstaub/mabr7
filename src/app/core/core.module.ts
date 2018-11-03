import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from '../product/product.service';
import { UserService } from '../user/shared/user.service';
import { StorageService } from '../shared/storage.service';
import { ProductCategoryService } from '../product/product-category.service';
import { AuthService } from '../user/shared/auth.service';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    SharedModule,
  ],
  providers: [
    UserService,
    AuthService,
    ProductService,
    ProductCategoryService,
    StorageService,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
})
export class CoreModule {
}
