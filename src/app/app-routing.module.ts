import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ADMIN_ROUTES } from './admin/admin.routing';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutLoginComponent } from './checkout/checkout-login/checkout-login.component';
import { CHECKOUT_ROUTES } from './checkout/checkout.routing';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminComponent, children: ADMIN_ROUTES},
  {path: 'bestellung', component: OrderComponent},
  {path: 'checkout', component: CheckoutComponent, children: CHECKOUT_ROUTES},
  {path: 'checkout-login', component: CheckoutLoginComponent},
  {path: '**', redirectTo: '/'},  // default Route, könnte auch 404 Seite sein, muss am Schluss aufgerufen werden

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
