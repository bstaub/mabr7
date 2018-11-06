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
import { SettingsService } from '../shared/settings.service';
import { AlertifyService } from '../shared/alertify.service';
import { HeaderFlyoutComponent } from './header/header-flyout/header-flyout.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeaderFlyoutComponent],
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
    SettingsService,
    AlertifyService,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
})
export class CoreModule {
}
