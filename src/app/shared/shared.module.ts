import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../../environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgPrimeModule } from './ng-prime.module';
import { ArraySortPipe } from './shared/array-sort.pipe';
import { ArraySortDescPipe } from './shared/array-sort-desc.pipe';
import { CheckStatusPipe } from './shared/check-status.pipe';
import { BackButtonDirective } from './directive/back-button.directive';
import { PageTitleComponent } from './page-title/page-title.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ArraySortPipe,
    ArraySortDescPipe,
    CheckStatusPipe,
    BackButtonDirective,
    PageTitleComponent,
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFontAwesomeModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgPrimeModule,
    ArraySortPipe,
    ArraySortDescPipe,
    CheckStatusPipe,
    BackButtonDirective,
    PageTitleComponent,
    NgxPaginationModule,
    AngularFontAwesomeModule,
    RouterModule,
  ]
})
export class SharedModule {
}
