import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCategory } from '../../models/product-category.model';
import { Observable } from 'rxjs';
import { ProductService } from '../../product/product.service';
import { StorageService } from '../../shared/storage.service';
import { ProductCategoryService } from '../../product/product-category.service';
import { AlertifyService } from '../../shared/alertify.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-admin-product-list-edit',
  templateUrl: './admin-product-list-edit.component.html',
  styleUrls: ['./admin-product-list-edit.component.scss']
})
export class AdminProductListEditComponent implements OnInit {

  @Input() product: Product;
  @Input() count: number;

  editState = false;
  productToEdit: Product;
  image: any;
  selectedCategory: ProductCategory;
  categories$: Observable<ProductCategory[]>;

  constructor(private productService: ProductService,
              private storageService: StorageService,
              private productCategory: ProductCategoryService,
              private alertifyService: AlertifyService,
  ) {
  }

  ngOnInit() {
    this.categories$ = this.productCategory.getCategories();
    if (this.product.discountFactor == null || this.product.discount === false) {
      this.product.discountFactor = 1;
    }
  }

  updateActive(isActive: boolean) {
    this.productService.updateProduct(this.product.key, {active: isActive});
  }

  deleteProduct() {
    this.alertifyService.confirm('Wollen Sie das Produkt ' + this.product.name + ' wirklich löschen?', () => {
      this.productService.deleteProduct(this.product.key);
      this.alertifyService.success(this.product.name + ' wurde erfolgreich gelöscht.');
    });
  }

  editProduct(event, product) {
    this.selectedCategory = product.productCategory;  // wichtig, damit der Initial Wert der vorhandene Wert beim Dropdown Edit übernommen wird!
    this.editState = true;
    this.productToEdit = product;
  }

  updateProduct(product: Product) {
    this.productService.updateProduct(product.key, product, this.image, this.selectedCategory.name);  // Parameter 3 und 4 is optional for Admin Edit!
    this.alertifyService.success(product.name + ' wurde erfolgreich editiert.');
  }

  onFileSelection($event) {
    this.storageService.upload($event)
      .then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {

        uploadSnapshot.ref.getDownloadURL().then((downloadURL) => {
          this.image = downloadURL;

        });

      });
  }
}
