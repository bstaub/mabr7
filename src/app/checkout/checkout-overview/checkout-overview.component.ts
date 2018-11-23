import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../models/order.model';
import { Subscription } from 'rxjs';
import { OrderService } from '../../order/shared/order.service';
import { UserService } from '../../user/shared/user.service';
import { LocalStorageService } from '../../shared/local-storage.service';
import { AuthService } from '../../user/shared/auth.service';
import { OrderFlyoutService } from '../../core/shared/order-flyout.service';
import { ProductPerOrderLocalStorage } from '../../models/productPerOrderLocalStorage.model';
import { SettingsService } from '../../shared/settings.service';

@Component({
  selector: 'app-checkout-overview',
  templateUrl: './checkout-overview.component.html',
  styleUrls: ['./styles/checkout-overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckoutOverviewComponent implements OnInit, OnDestroy {
  productPerOrderLocalStorage: ProductPerOrderLocalStorage[];
  user: any;
  orderData: any;
  orderId: string;
  order: Order;
  closingOrderId: string;
  nextShopOrderId: number;
  authSubscription: Subscription;
  nextOrderIdSubscription: Subscription;
  orderSubscription: Subscription;
  productsSubscription: Subscription;
  p = 1;


  constructor(private orderService: OrderService,
              private userService: UserService,
              private router: Router,
              private localStorageService: LocalStorageService,
              private authService: AuthService,
              private orderFlyoutService: OrderFlyoutService,
              private settingsService: SettingsService,
  ) {
  }

  ngOnInit() {
    this.authSubscription = this.authService.user$.subscribe((user) => {
      if (user && user.emailVerified) {
        this.user = user;
        this.getOrderData(user.id);
      } else {
        this.user = '0';
        this.getOrderData(this.localStorageService.getData('anonymusOrderId').orderId);
      }
    });

    this.productsSubscription = this.orderFlyoutService.currentProductsPerOrderLocalStorage.subscribe(
      (data: ProductPerOrderLocalStorage[]) => this.productPerOrderLocalStorage = data
    );
  }

  orderNow() {
    this.order = new Order();
    this.order.key = this.orderService.getOrderId();
    this.order.shopOrderId = this.nextShopOrderId;
    this.order.orderDate = new Date();
    this.order.status = 'done';
    this.order.totalValue = this.orderData.totalValue;
    this.order.userId = this.user.id;
    this.order.customerBillingAddress = this.orderData.customerBillingAddress;
    this.order.customerShippingAddress = this.orderData.customerShippingAddress;
    this.order.shipqingEqualsBillingAddress = this.orderData.shipqingEqualsBillingAddress;
    this.order.shippingMethod = this.orderData.shippingMethod;
    this.order.anonymusOrder = !(this.user === 0);
    this.orderService.updateOrder(this.order);
    this.closingOrderId = this.orderService.completeUserOrder(this.order);
    this.orderService.completeProductsPerOrder(this.closingOrderId, this.localStorageService.getData('products'));

    if (this.user !== '0') {
      this.orderService.resetUserOrder(this.order);
      this.orderService.clearScart(this.localStorageService.getData('products'));
    } else {
      this.orderService.clearScart(this.localStorageService.getData('products'));
      this.orderService.deleteOrderAnonymus(this.order.key);
      this.localStorageService.destroyLocalStorage('anonymusOrderId');
    }


    this.router.navigate(['/checkout/thx'], {queryParams: {shopOrderId: this.nextShopOrderId}});
  }

  getOrderData(userId) {
    this.orderSubscription = this.orderService.getUserOrder(userId).subscribe((res) => {
      this.orderData = res;
      this.orderFlyoutService.refreshOrderFlyout(this.localStorageService.getData('products'), this.orderData);
    });

    this.nextOrderIdSubscription = this.orderService.getLatestOrder().subscribe((res) => {
      if (res.length === 0) {
        this.nextShopOrderId = 1;
      } else {
        this.nextShopOrderId = res[0].shopOrderId + 1;
      }
    });

  }

  goBack() {
    this.router.navigate(['/checkout/paymentdata']);
  }

  get itemsPerPage() {
    return this.settingsService.getSettings().itemsPerPage;
  }


  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.nextOrderIdSubscription.unsubscribe();
    this.orderSubscription.unsubscribe();
    this.productsSubscription.unsubscribe();
  }

}
