import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    SharedModule
  ]
})
export class OrderModule { }
