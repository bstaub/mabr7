import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from './shared/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./styles/product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {

  }

  getBasket() {
    this.router.navigate(['/bestellung']);
  }

}
