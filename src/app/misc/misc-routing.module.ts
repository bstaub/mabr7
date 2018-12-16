import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiscAgbComponent } from './misc-agb/misc-agb.component';

const routes: Routes = [
  {path: '', redirectTo: 'agb', pathMatch: 'full'},
  {path: 'agb', component: MiscAgbComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MiscRoutingModule {}
