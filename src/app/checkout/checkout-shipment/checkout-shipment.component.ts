import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../user/shared/user.service';
import { Router } from '@angular/router';
import { OrderService } from '../../order/shared/order.service';
import { Order } from '../../models/order.model';



@Component({
  selector: 'app-checkout-shipment',
  templateUrl: './checkout-shipment.component.html',
  styles: [``]
})
export class CheckoutShipmentComponent implements OnInit {
  ShipmentForm: FormGroup;
  user: any;
  orderData: any;
  orderId: string;
  order: Order;


  constructor(private orderService: OrderService,
              private userService: UserService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.user = this.userService.getCurrentUser();
      this.getOrderData();

    }, 1000);


    this.initShipmentFormGroup();
  }

  onSubmit() {
    this.order = new Order();
    this.order.key = this.orderService.getOrderId();
    this.order.shippingMethod = this.ShipmentForm.value.shippingMethod;
    this.orderService.updateOrder(this.order);
    this.router.navigate(['/checkout/paymentdata']);

  }

  getOrderData() {
    this.orderService.getUserOrder(this.orderService.getOrderId()).subscribe((res) => {
      this.orderData = res;
    });
  }

  initShipmentFormGroup() {
    this.ShipmentForm = new FormGroup({
      shippingMethod: new FormControl()

    });

    setTimeout(() => {

      if (this.orderData) {
        this.setOrderData();
      }
    }, 1300);


  }

  setOrderData() {
    this.ShipmentForm.patchValue({
      shippingMethod: this.orderData.shippingMethod

    });

  }

  goBack() {
    this.router.navigate(['/checkout/customerdata']);
  }



}
