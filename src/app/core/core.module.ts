import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from '../product/shared/product.service';
import { UserService } from '../user/shared/user.service';
import { StorageService } from '../shared/storage.service';
import { ProductCategoryService } from '../product/shared/product-category.service';
import { AuthService } from '../user/shared/auth.service';
import { SettingsService } from '../shared/settings.service';
import { AlertifyService } from '../shared/alertify.service';
import { HeaderOrderFlyoutComponent } from './header/header-orderflyout/header-orderflyout.component';
import { OffCanvasComponent } from './home/off-canvas/off-canvas.component';
import { HomeSliderNgcarouselComponent } from './home/home-slider-ngcarousel/home-slider-ngcarousel.component';
import { SliderService } from './shared/slider.service';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { AdminGuard } from '../user/guards/admin.guard';
import { Auth2Guard } from '../user/guards/auth2.guard';
import { AuthuserGuard } from '../user/guards/authuser.guard';
import { RegisterGuard } from '../user/guards/register.guard';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeSliderNgcarouselComponent,
    OffCanvasComponent,
    HeaderSearchComponent,
    HeaderOrderFlyoutComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    OffCanvasComponent,
    SharedModule,
  ],
  providers: [
    UserService,
    AuthService,
    ProductService,
    ProductCategoryService,
    SliderService,
    StorageService,
    SettingsService,
    AlertifyService,
    AdminGuard,
    Auth2Guard,
    AuthuserGuard,
    RegisterGuard,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
})
export class CoreModule {
}
