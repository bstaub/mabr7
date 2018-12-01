import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyfeatureListComponent } from './lazyfeature-list/lazyfeature-list.component';

const routes: Routes = [
  {
    path: '',
    component: LazyfeatureListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyfeatureRoutingModule { }
