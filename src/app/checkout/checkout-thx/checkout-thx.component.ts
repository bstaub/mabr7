import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout-thx',
  templateUrl: './checkout-thx.component.html',
  styleUrls: ['./styles/checkout-thx.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckoutThxComponent implements OnInit, OnDestroy {
  shopOrderId: string;
  orderIdSubscription: Subscription;


  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.orderIdSubscription = this.route.queryParamMap.subscribe(queryParams => {
      this.shopOrderId = queryParams.get('shopOrderId');
    });

  }

  onBackToShopping() {
    this.router.navigate(['/produkte']);
  }

  ngOnDestroy() {
    this.orderIdSubscription.unsubscribe();
  }

}
