import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from './shared/order.service';
import { ProductService } from '../product/shared/product.service';
import { ProductPerOrderLocalStorage } from '../models/productPerOrderLocalStorage.model';
import { UserService } from '../user/shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../shared/local-storage.service';
import { AuthService } from '../user/shared/auth.service';
import { SettingsService } from '../shared/settings.service';
import { OrderFlyoutService } from '../shared/order-flyout.service';




@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./style/order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderComponent implements OnInit, OnDestroy {

  productPerOrderLocalStorage: ProductPerOrderLocalStorage[] = [];
  orderId: string;
  user: any;
  userId: string;
  order: any;
  totalValue: number;
  authSubscription: Subscription;
  productsSubscription: Subscription;
  p = 1;



  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private productService: ProductService,
    private router: Router,
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private authService: AuthService,
    private settingsService: SettingsService,
    private orderFlyoutService: OrderFlyoutService,

  ) {


  }

  ngOnInit() {
    this.authSubscription = this.authService.user$.subscribe((user) => {
      if (user && user.emailVerified) {
        this.user = user;
        this.getProducts(user.id);
      } else {
        this.getProducts(this.localStorageService.getData('anonymusOrderId').orderId);
      }
    });



    this.productsSubscription = this.orderFlyoutService.currentProductsPerOrderLocalStorage.subscribe(
      (data: ProductPerOrderLocalStorage[]) => this.productPerOrderLocalStorage = data
    );


  }

  getProducts(orderId) {
    this.orderService.getUserOrder(orderId).subscribe((res) => {
      this.order = res;
      this.orderFlyoutService.refreshOrderFlyout(this.localStorageService.getData('products'), this.order);
    });

  }


  onEnterOrderData() {
    if (this.user) {
      this.router.navigate(['/checkout/customerdata']);
    } else {
      this.router.navigate(['/checkout-login']);
    }
  }

  onDeleteScart() {
    this.orderService.clearScart(this.productPerOrderLocalStorage);
    this.productPerOrderLocalStorage = [];
    this.router.navigate(['/bestellung']);
    this.orderService.calcOrderTotalValue();
  }

  onDeletItem(productId: string) {
    this.productPerOrderLocalStorage.forEach((product, index, sourceArray) => {
      if (product.productId === productId) {
        sourceArray.splice(index, 1);
      }
    });
    this.orderService.deleteProductFromOrder(productId);
    this.orderService.calcOrderTotalValue();
  }

  onDecreaseQty(productPerOrderLocalStorage: ProductPerOrderLocalStorage) {
    productPerOrderLocalStorage.qty = productPerOrderLocalStorage.qty === 1 ? 1 : productPerOrderLocalStorage.qty - 1;
    this.orderService.updateProductQty(productPerOrderLocalStorage);
    this.orderService.calcOrderTotalValue();
  }

  onIncreaseQty(productPerOrderLocalStorage: ProductPerOrderLocalStorage) {
    productPerOrderLocalStorage.qty += 1;
    this.orderService.updateProductQty(productPerOrderLocalStorage);
    this.orderService.calcOrderTotalValue();
  }

  onChangeQty(productPerOrderLocalStorage: ProductPerOrderLocalStorage) {
    productPerOrderLocalStorage.qty = Number(productPerOrderLocalStorage.qty);
    this.orderService.updateProductQty(productPerOrderLocalStorage);
    this.orderService.calcOrderTotalValue();
  }

  get itemsPerPage() {
    return this.settingsService.getSettings().itemsPerPage;
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.productsSubscription.unsubscribe();
  }


}
