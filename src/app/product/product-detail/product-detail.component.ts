import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../user/shared/user.service';
import { AlertifyService } from '../../shared/alertify.service';
import { ProductService } from '../shared/product.service';
import { OrderService } from '../../order/shared/order.service';

@Component({
  selector: 'app-detail-list',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;
  @Input() count: number;

  private productId: string;
  public selectedProduct$: Observable<Product>;
  user: any;

  constructor(private activatedRoute: ActivatedRoute,
              private productFirestoreService: ProductService,
              private userService: UserService,
              private orderFirestoreService: OrderService,
              private alertifyService: AlertifyService,
  ) {
  }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    this.activatedRoute.params.subscribe(
      params => {
        this.productId = params['id'];  // (+) +params['id'] would converts string 'id' to a number
        this.selectedProduct$ = this.productFirestoreService.getProduct(this.productId).valueChanges();
      }
    );

  }

  addToBasket(product) {
    product.key = this.productId;
    this.orderFirestoreService.addProductToOrder(product);
    this.alertifyService.success(product.name + ' wurde dem Warenkorb hinzugefügt.');
  }


}
