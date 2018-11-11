import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../product/shared/product.service';
import { SettingsService } from '../../shared/settings.service';


@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.scss']
})
export class AdminProductListComponent implements OnInit {

  products$: Observable<Product[]>;
  p = 1;

  constructor( private productService: ProductService,
               private settingsService: SettingsService,
  ) {
  }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.products$ = this.productService.getProducts();

  }

  get itemsPerPage() {
    return this.settingsService.getSettings().itemsPerPage;
  }

}
