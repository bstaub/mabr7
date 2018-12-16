import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MiscAgbComponent } from './misc-agb/misc-agb.component';
import { MiscRoutingModule } from './misc-routing.module';

@NgModule({
  declarations: [MiscAgbComponent],
  imports: [
    SharedModule,
    MiscRoutingModule
  ]
})
export class MiscModule { }
