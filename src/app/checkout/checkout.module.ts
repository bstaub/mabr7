import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutCustomerdataComponent } from './checkout-customerdata/checkout-customerdata.component';
import { CheckoutLoginComponent } from './checkout-login/checkout-login.component';
import { CheckoutOverviewComponent } from './checkout-overview/checkout-overview.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { CheckoutShipmentComponent } from './checkout-shipment/checkout-shipment.component';
import { CheckoutThxComponent } from './checkout-thx/checkout-thx.component';
import { CheckoutComponent } from './checkout.component';

@NgModule({
  declarations: [CheckoutCustomerdataComponent, CheckoutLoginComponent, CheckoutOverviewComponent, CheckoutPaymentComponent, CheckoutShipmentComponent, CheckoutThxComponent, CheckoutComponent],
  imports: [
    CommonModule
  ]
})
export class CheckoutModule { }
