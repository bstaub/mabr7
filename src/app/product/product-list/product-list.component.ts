import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../shared/product.service';
import { Product } from '../../models/product.model';
import { SettingsService } from '../../shared/settings.service';
import { ProductCategory } from '../../models/product-category.model';
import { ProductCategoryService } from '../shared/product-category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
  queryParams: Params;

  constructor(private productService: ProductService,
              private productCategory: ProductCategoryService,
              private settingsService: SettingsService,
              private activeRoute: ActivatedRoute,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.getProductList();
    this.categories$ = this.productCategory.getCategories();

    this.queryParams = this.activeRoute.snapshot.queryParams;
    if (this.queryParams.category !== '') {
      this.products$ = this.productService.filterProductsByCategoryAndField(this.queryParams.category, 'a-z');
      this.selectedCategory = this.queryParams.category;
      this.router.navigate([], {
        queryParams: {
          category: null,
        },
        queryParamsHandling: 'merge'
      });
    }
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
