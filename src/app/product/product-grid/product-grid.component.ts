import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../shared/product.service';
import { ProductCategoryService } from '../shared/product-category.service';
import { ProductCategory } from '../../models/product-category.model';
import { SettingsService } from '../../shared/settings.service';




@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit, OnDestroy {

  products$: Observable<Product[]>;
  categories$: Observable<ProductCategory[]>;
  selectedCategory: string;
  selectedSort: string;
  p = 1;
  selectUndefinedOptionValue: any;


  constructor(private productService: ProductService,
              private productCategory: ProductCategoryService,
              private settingsService: SettingsService,
  ) {
  }

  ngOnInit() {
    this.getProductList();
    this.categories$ = this.productCategory.getCategories();
  }

  getProductList() {
    this.products$ = this.productService.getProducts();
  }

  selectedOption() {
    this.products$ = this.productService.filterProductsByCategoryAndField(this.selectedCategory, this.selectedSort);
  }

  get itemsPerPage() {
    return this.settingsService.getSettings().itemsPerPage;
  }

  ngOnDestroy() {

  }

}
