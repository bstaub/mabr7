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
import { HeaderOrderFlyoutComponent } from './header/header-orderflyout/header-orderflyout.component';
import { OffCanvasComponent } from './home/off-canvas/off-canvas.component';
import { HomeSliderNgcarouselComponent } from './home/home-slider-ngcarousel/home-slider-ngcarousel.component';
import { SliderService } from './shared/slider.service';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeSliderNgcarouselComponent,
    OffCanvasComponent,
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
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
})
export class CoreModule {
}
