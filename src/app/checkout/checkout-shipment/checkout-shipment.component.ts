import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../user/shared/user.service';
import { Router } from '@angular/router';
import { Order } from '../../models/order.model';
import { AuthService } from '../../user/shared/auth.service';
import { LocalStorageService } from '../../shared/local-storage.service';
import { Subscription } from 'rxjs';
import { OrderService } from '../../order/shared/order.service';
import { OrderFlyoutService } from '../../core/shared/order-flyout.service';




@Component({
  selector: 'app-checkout-shipment',
  templateUrl: './checkout-shipment.component.html',
  styleUrls: ['./styles/checkout-shipment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckoutShipmentComponent implements OnInit, OnDestroy {
  ShipmentForm: FormGroup;
  user: any;
  orderData: any;
  orderId: string;
  order: Order;
  authSubscription: Subscription;
  orderSubscription: Subscription;


  constructor(private orderService: OrderService,
              private userService: UserService,
              private router: Router,
              private authService: AuthService,
              private localStorageService: LocalStorageService,
              private orderFlyoutService: OrderFlyoutService,
  ) {
  }

  ngOnInit() {
    this.initShipmentFormGroup();
    this.authSubscription = this.authService.user$.subscribe((user) => {
      if (user && user.emailVerified) {
        this.getOrderData(user.id);
      } else {
        this.getOrderData(this.localStorageService.getData('anonymusOrderId').orderId);
      }
    });

  }

  onSubmit() {
    this.order = new Order();
    this.order.key = this.orderService.getOrderId();
    this.order.shippingMethod = this.ShipmentForm.value.shippingMethod;
    this.orderService.updateOrder(this.order);
    this.router.navigate(['/checkout/paymentdata']);
  }

  getOrderData(userId) {
    this.orderSubscription = this.orderService.getUserOrder(userId).subscribe((res) => {
      this.orderData = res;
      this.setOrderData();
      this.orderFlyoutService.refreshOrderFlyout(this.localStorageService.getData('products'), this.orderData);
    });

  }

  initShipmentFormGroup() {
    this.ShipmentForm = new FormGroup({
      shippingMethod: new FormControl()

    });
  }

  setOrderData() {
    this.ShipmentForm.patchValue({
      shippingMethod: this.orderData.shippingMethod
    });

  }

  goBack() {
    this.router.navigate(['/checkout/customerdata']);
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.orderSubscription.unsubscribe();
  }



}
