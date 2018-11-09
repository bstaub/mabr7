import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { Router } from '@angular/router';
import { OrderService } from '../../order/shared/order.service';
import { UserService } from '../../user/shared/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from '../../shared/local-storage.service';


@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styles: [`
  `]
})
export class CheckoutPaymentComponent implements OnInit {

  PaymentForm: FormGroup;
  user: any;
  orderData: any;
  orderId: string;
  order: Order;
  closingOrderId: string;
  nextShopOrderId: number;


  constructor(private orderService: OrderService,
              private userService: UserService,
              private router: Router,
              private localStorageService: LocalStorageService,
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.user = this.userService.getCurrentUser();
      this.getOrderData();

    }, 1000);


    this.initPaymentFormGroup();
  }

  onSubmit() {
    this.order = new Order();
    this.order.key = this.orderService.getOrderId();
    this.order.shopOrderId = this.nextShopOrderId;
    this.order.orderDate = new Date();
    this.order.status = 'done';
    this.order.totalValue = this.orderData.totalValue;
    this.order.userId = this.user.uid;
    this.order.customerBillingAddress = this.orderData.customerBillingAddress;
    this.order.customerShippingAddress = this.orderData.customerShippingAddress;
    this.order.shipqingEqualsBillingAddress = this.orderData.shipqingEqualsBillingAddress;
    this.order.shippingMethod = this.orderData.shippingMethod;
    this.order.paymentMethod = this.PaymentForm.value.paymentMethod;
    this.order.anonymusOrder = !this.user;
    this.orderService.updateOrder(this.order);

    this.closingOrderId = this.orderService.completeUserOrder(this.order);
    this.orderService.completeProductsPerOrder(this.closingOrderId, this.localStorageService.getData('products'));

    if (this.user) {
      this.orderService.resetUserOrder(this.order);
      this.orderService.clearScart(this.localStorageService.getData('products'));
    } else {
      this.orderService.clearScart(this.localStorageService.getData('products'));
      this.orderService.deleteOrderAnonymus(this.order.key);
      this.localStorageService.destroyLocalStorage('anonymusOrderId');
    }


    this.router.navigate(['/checkout/thx'], {queryParams: {shopOrderId: this.nextShopOrderId}});
  }


  getOrderData() {
    this.orderService.getUserOrder(this.orderService.getOrderId()).subscribe((res) => {
      this.orderData = res;
    });

    this.orderService.getLatestOrder().subscribe((res) => {
      this.nextShopOrderId = res[0].shopOrderId + 1;
    });


  }

  initPaymentFormGroup() {
    this.PaymentForm = new FormGroup({
      paymentMethod: new FormControl()

    });

    setTimeout(() => {

      if (this.orderData) {
        this.setOrderData();
      }
    }, 1300);

  }

  setOrderData() {
    this.PaymentForm.patchValue({
      paymentMethod: this.orderData.paymentMethod

    });

  }

  goBack() {
    this.router.navigate(['/checkout/shipmentdata']);
  }

}

