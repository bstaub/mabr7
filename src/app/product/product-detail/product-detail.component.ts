import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertifyService } from '../../shared/alertify.service';
import { ProductService } from '../shared/product.service';
import { OrderService } from '../../order/shared/order.service';
import { Title } from '@angular/platform-browser';
import { SettingsService } from '../../shared/settings.service';

@Component({
  selector: 'app-detail-list',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  private productId: string;
  private productName: string;
  private productCategoryName: string;
  activatedRouteSubscription: Subscription;
  selectedProduct$: Observable<Product>;
  currentOrientation = 'horizontal';
  currentJustify = 'start';


  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private orderService: OrderService,
              private alertifyService: AlertifyService,
              private router: Router,
              private settingsService: SettingsService,
              private title: Title,
  ) {
  }

  ngOnInit() {
    this.activatedRouteSubscription = this.activatedRoute.params.subscribe(
      params => {
        this.productId = params['id'];  // (+) +params['id'] would converts string 'id' to a number
        this.productName = params['name'];
        this.productCategoryName = params['category'];
        this.selectedProduct$ = this.productService.getProduct(this.productId).valueChanges();
        this.title.setTitle(`${this.productName}: ${this.settingsService.getSettings().domainName}: ${this.productCategoryName}`);
      }
    );
    // routerLink="/produkte/detail/{{product.name | urlPrettifier}}" [queryParams]="{key: product.key}"
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
