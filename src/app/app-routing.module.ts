import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ADMIN_ROUTES } from './admin/admin.routing';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminComponent, children: ADMIN_ROUTES},
  {path: '**', redirectTo: '/'},  // default Route, könnte auch 404 Seite sein, muss am Schluss aufgerufen werden

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
