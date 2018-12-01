import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyfeatureRoutingModule } from './lazyfeature-routing.module';
import { LazyfeatureListComponent } from './lazyfeature-list/lazyfeature-list.component';



@NgModule({
  declarations: [LazyfeatureListComponent],
  imports: [
    CommonModule,
    LazyfeatureRoutingModule,
  ]
})
export class LazyfeatureModule { }
