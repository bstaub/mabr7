import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UserService } from './user/shared/user.service';
import { AuthService } from './user/shared/auth.service';
import { ProductService } from './product/shared/product.service';
import { ProductCategoryService } from './product/shared/product-category.service';
import { SliderService } from './shared/slider.service';
import { StorageService } from './shared/storage.service';
import { LocalStorageService } from './shared/local-storage.service';
import { SettingsService } from './shared/settings.service';
import { AlertifyService } from './shared/alertify.service';
import { OrderService } from './order/shared/order.service';
import { OrderFlyoutService } from './shared/order-flyout.service';
import { AdminGuard } from './user/guards/admin.guard';
import { Auth2Guard } from './user/guards/auth2.guard';
import { AuthuserGuard } from './user/guards/authuser.guard';
import { RegisterGuard } from './user/guards/register.guard';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // HeaderComponent,
    FooterComponent,
    // HomeSliderNgcarouselComponent,
    // OffCanvasComponent,
    // HeaderSearchComponent,
    // HeaderOrderFlyoutComponent,
    // Error404PageComponent,
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    AppRoutingModule,
    // AdminModule,
    // ProductModule,
    // OrderModule,
    // CheckoutModule,
    // UserModule,
    SharedModule,
  ],
  exports: [
    // CommonModule,
    // HeaderComponent,
    FooterComponent,
    // OffCanvasComponent,
    // SharedModule,
  ],
  providers: [
    UserService,
    AuthService,
    ProductService,
    ProductCategoryService,
    SliderService,
    StorageService,
    LocalStorageService,
    SettingsService,
    AlertifyService,
    OrderService,
    OrderFlyoutService,
    AdminGuard,
    Auth2Guard,
    AuthuserGuard,
    RegisterGuard,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
