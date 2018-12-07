import { Component, isDevMode, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from '../../models/product-category.model';
import { ProductCategoryService } from '../../product/shared/product-category.service';
import { SettingsService } from '../../shared/settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./styles/footer.styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  categories$: Observable<ProductCategory[]>;
  url: string;

  constructor( private productCategory: ProductCategoryService,
               private settingsService: SettingsService
               ) {

    if (this.isDevMode()) {
      this.url = 'localhost:4200';
    } else {
      this.url = `https://${this.settingsService.getSettings().domainName}`;
    }
  }

  ngOnInit() {
    this.categories$ = this.productCategory.getCategories();
  }

  isDevMode(): boolean {
    if (isDevMode()) {
      return true;
    }
  }

}
