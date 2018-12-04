import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { OrderComponent } from './order/order.component';
import { CheckoutLoginComponent } from './checkout/checkout-login/checkout-login.component';
import { UserComponent } from './user/user.component';
import { USER_ROUTES } from './user/user.routing';
import { Auth2Guard } from './user/guards/auth2.guard';
import { UserLoginRegisterSlideComponent } from './user/user-login-register-slide/user-login-register-slide.component';
import { AdminGuard } from './user/guards/admin.guard';
import { Error404PageComponent } from './core/404/error-404-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import { ADMIN_ROUTES } from './admin/admin-routing.module';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminComponent, children: ADMIN_ROUTES, canActivate: [AdminGuard]},
  {
    path: 'produkte',
    component: ProductComponent,
    loadChildren: './product/product.module#ProductModule'
  },
  {
    path: 'bestellung',
    component: OrderComponent,
    loadChildren: './order/order.module#OrderModule'
  },

  {path: 'checkout-login', component: CheckoutLoginComponent},
  {
    path: 'checkout',
    component: CheckoutComponent,
    loadChildren: './checkout/checkout.module#CheckoutModule'
  },
  {path: 'users', component: UserComponent, children: USER_ROUTES, canActivate: [Auth2Guard]},
  {path: 'user-login-register-slide', component: UserLoginRegisterSlideComponent},
  {
    path: 'lazyfeature',
    loadChildren: './lazyfeature/lazyfeature.module#LazyfeatureModule'
  },
  {path: 'resetpw', component: ResetPasswordComponent},
  // There's a bug that's preventing wild card routes to be lazy loaded (see: https://github.com/angular/angular/issues/13848)
  // That's why the Error page should be eagerly loaded
  {
    path: '**',
    component: Error404PageComponent
  },
  {path: '**', redirectTo: '/'},  // default Route, must be the last rule, could also be 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
