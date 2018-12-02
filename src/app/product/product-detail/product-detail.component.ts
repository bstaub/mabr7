import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertifyService } from '../../shared/alertify.service';
import { ProductService } from '../shared/product.service';
import { OrderService } from '../../order/shared/order.service';

@Component({
  selector: 'app-detail-list',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  private productId: string;
  activatedRouteSubscription: Subscription;
  selectedProduct$: Observable<Product>;
  currentOrientation = 'horizontal';
  currentJustify = 'start';


  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private orderService: OrderService,
              private alertifyService: AlertifyService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.activatedRouteSubscription = this.activatedRoute.params.subscribe(
      params => {
        this.productId = params['id'];  // (+) +params['id'] would converts string 'id' to a number
        this.selectedProduct$ = this.productService.getProduct(this.productId).valueChanges();
      }
    );
    this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(
      queryParams => {
        if (queryParams['key']) {
          this.productId = queryParams['key'];
          this.selectedProduct$ = this.productService.getProduct(this.productId).valueChanges();
        }
    });
    this.router.navigate([], {
      queryParams: {
        key: null,
      },
      queryParamsHandling: 'merge'
    });
  }

  addToBasket(product) {
    if (product.itemcount === undefined) {
      product.itemcount = 1;
    }
    product.key = this.productId;
    this.orderService.addProductToOrder(product);
    this.alertifyService.success(product.name + ' wurde dem Warenkorb hinzugefügt.');
  }

  ngOnDestroy(): void {
    this.activatedRouteSubscription.unsubscribe();
  }

}
