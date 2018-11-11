import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../shared/product.service';
import { OrderService } from '../../order/shared/order.service';
import { AlertifyService } from '../../shared/alertify.service';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Input() count: number;

  constructor(private productService: ProductService,
              private orderService: OrderService,
              private alertifyService: AlertifyService,
  ) {
  }

  ngOnInit() {
  }

  addToBasket(product) {
    this.orderService.addProductToOrder(product);
    this.alertifyService.success(product.name + ' wurde dem Warenkorb hinzugefügt.');
  }
}
