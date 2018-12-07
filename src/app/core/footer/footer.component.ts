import { Component, isDevMode, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from '../../models/product-category.model';
import { ProductCategoryService } from '../../product/shared/product-category.service';
import { SettingsService } from '../../shared/settings.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./styles/footer.styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  categories$: Observable<ProductCategory[]>;
  url: string;
  productCategoryCollection: AngularFirestoreCollection<ProductCategory>;
  categories$: Observable<ProductCategory[]>;

  constructor(private productCategory: ProductCategoryService,
              public afs: AngularFirestore
  ) {

    this.productCategoryCollection = this.afs.collection('categories', ref => ref.orderBy('name', 'asc'));
    this.categories$ = this.productCategoryCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ProductCategory;
        const key = a.payload.doc.id;
        return {key, ...data};
      }))
    );
  }

  ngOnInit() {
     // this.categories$ = this.productCategory.getCategories();
  }


}
