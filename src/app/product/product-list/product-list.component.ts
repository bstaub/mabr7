import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../shared/product.service';
import { Product } from '../../models/product.model';
import { SettingsService } from '../../shared/settings.service';
import { ProductCategory } from '../../models/product-category.model';
import { ProductCategoryService } from '../shared/product-category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

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

}
