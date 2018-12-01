import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyfeatureRoutingModule } from './lazyfeature-routing.module';
import { LazyfeatureListComponent } from './lazyfeature-list/lazyfeature-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LazyfeatureListComponent],
  imports: [
    CommonModule,
    SharedModule,
    LazyfeatureRoutingModule,
  ]
})
export class LazyfeatureModule { }
