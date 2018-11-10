import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ADMIN_ROUTES } from './admin/admin.routing';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutLoginComponent } from './checkout/checkout-login/checkout-login.component';
import { CHECKOUT_ROUTES } from './checkout/checkout.routing';
import { UserComponent } from './user/user.component';
import { USER_ROUTES } from './user/user.routing';
import { Auth2Guard } from './user/guards/auth2.guard';
import { UserLoginRegisterSlideComponent } from './user/user-login-register-slide/user-login-register-slide.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminComponent, children: ADMIN_ROUTES},
  {path: 'bestellung', component: OrderComponent},
  {path: 'checkout', component: CheckoutComponent, children: CHECKOUT_ROUTES},
  {path: 'checkout-login', component: CheckoutLoginComponent},
  {path: 'users', component: UserComponent, children: USER_ROUTES, canActivate: [Auth2Guard]},
  {path: 'user-login-register-slide', component: UserLoginRegisterSlideComponent},
  {path: '**', redirectTo: '/'},  // default Route, must be the last rule, could also be 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
