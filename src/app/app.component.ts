import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderService } from './order/shared/order.service';
import { LocalStorageService } from './shared/local-storage.service';
import { AuthService } from './user/shared/auth.service';
import { OrderFlyoutService } from './shared/order-flyout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles/app.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'MABRSHOP';
  OffCanvasClickedCheck = false;
  authSubscription: Subscription;
  user: any;
  order: any;

  constructor(
    private orderFlyoutService: OrderFlyoutService,
    private localStorageService: LocalStorageService,
    private authService: AuthService,
    private orderService: OrderService,
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
  }


  OffCanvasClicked() {
    this.OffCanvasClickedCheck = true;
  }

  CloseNavState() {
    this.OffCanvasClickedCheck = false;
  }

  getProducts(orderId) {
    this.orderService.getUserOrder(orderId).subscribe((res) => {
      this.order = res;
      this.orderFlyoutService.refreshOrderFlyout(this.localStorageService.getData('products'), this.order);
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
