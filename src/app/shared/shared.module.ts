import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../../environments/environment';
import { ArraySortPipe } from './shared/array-sort.pipe';
import { ArraySortDescPipe } from './shared/array-sort-desc.pipe';
import { CheckStatusPipe } from './shared/check-status.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { BackButtonDirective } from './directive/back-button.directive';
import { NgPrimeModule } from './ng-prime.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    ArraySortPipe,
    ArraySortDescPipe,
    CheckStatusPipe,
    BackButtonDirective,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFontAwesomeModule,
  ],
  exports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgPrimeModule,
    ArraySortPipe,
    ArraySortDescPipe,
    CheckStatusPipe,
    BackButtonDirective,
    NgxPaginationModule,
    AngularFontAwesomeModule,
  ]
})
export class SharedModule {
}
