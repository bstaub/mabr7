import { RouterModule, Routes } from '@angular/router';
import { CheckoutCustomerdataComponent } from './checkout-customerdata/checkout-customerdata.component';
import { CheckoutShipmentComponent } from './checkout-shipment/checkout-shipment.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { CheckoutThxComponent } from './checkout-thx/checkout-thx.component';
import { CheckoutOverviewComponent } from './checkout-overview/checkout-overview.component';
import { NgModule } from '@angular/core';


const CHECKOUT_ROUTES: Routes = [
  {path: '', redirectTo: 'customerdata', pathMatch: 'full'},
  {path: 'customerdata', component: CheckoutCustomerdataComponent, data: {checkoutStep: 1}},
  {path: 'shipmentdata', component: CheckoutShipmentComponent, data: {checkoutStep: 2}},
  {path: 'paymentdata', component: CheckoutPaymentComponent, data: {checkoutStep: 3}},
  {path: 'overview', component: CheckoutOverviewComponent, data: {checkoutStep: 4}},
  {path: 'thx', component: CheckoutThxComponent, data: {checkoutStep: 5}},
];

@NgModule({
  imports: [RouterModule.forChild(CHECKOUT_ROUTES)],
  exports: [RouterModule]
})

export class CheckoutRoutingModule {}
