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

@NgModule({
  declarations: [
    ArraySortPipe,
    ArraySortDescPipe,
    CheckStatusPipe,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    ArraySortPipe,
    ArraySortDescPipe,
    CheckStatusPipe,
  ]
})
export class SharedModule {
}
