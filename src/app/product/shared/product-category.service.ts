import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../../models/product-category.model';


@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  productCategoryCollection: AngularFirestoreCollection<ProductCategory>;
  categories$: Observable<ProductCategory[]>;
  categoryDoc: AngularFirestoreDocument<ProductCategory>;

  constructor(public afs: AngularFirestore) {
    this.productCategoryCollection = this.afs.collection('categories', ref => ref.orderBy('name', 'asc'));
    this.categories$ = this.productCategoryCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ProductCategory;
        const key = a.payload.doc.id;
        return {key, ...data};
      }))
    );
  }

  getCategories() {
    return this.categories$;
  }

  addCategory(category: ProductCategory) {
    this.productCategoryCollection.add(category).then((docRef) => {
      const NewCategoryKey: ProductCategory = {
        id: docRef.id,
      };
      this.setCategory(NewCategoryKey);
    }).catch(function (error) {
      console.error('Error adding document: ', error);
    });
  }

  deleteCategory(id: string) {
    this.categoryDoc = this.afs.doc(`categories/${id}`);
    this.categoryDoc.delete();
  }

  setCategory(category: ProductCategory) {
    this.categoryDoc = this.afs.doc(`categories/${category.id}`);
    return this.categoryDoc.set(category, {merge: true});
  }

  getPushKey() {
    return this.afs.createId();
  }

  getCategory(id) {
    this.categoryDoc = this.afs.doc(`categories/${id}`);
    return this.categoryDoc;
  }

  updateProduct(categoryKey, category: ProductCategory) {
    this.categoryDoc = this.afs.doc(`categories/${categoryKey}`);
    this.categoryDoc.update(category);
  }
}
