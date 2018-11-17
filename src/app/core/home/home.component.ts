import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../product/shared/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsDiscounts$: Observable<Product[]>;
  productsNew$: Observable<Product[]>;
  productsBestRated$:  Observable<Product[]>;

  constructor(private productService: ProductService,
  ) {
  }

  ngOnInit() {
    this.productsDiscounts$ = this.productService.getDiscountProductsWithLimit(5); // limit 5 = 1 - 4 (4 Produkte)
    this.productsNew$ = this.productService.getNewProductsWithLimit(5);
    this.productsBestRated$ = this.productService.getBestRatedProductsWithLimit(5);
  }

}
