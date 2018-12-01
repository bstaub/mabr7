import { NgModule } from '@angular/core';
import { CheckboxModule, DropdownModule, EditorModule, FileUploadModule } from 'primeng/primeng';
import { RatingModule } from 'primeng/rating';


@NgModule({
  declarations: [],

  imports: [
    DropdownModule,
    CheckboxModule,
    FileUploadModule,
    RatingModule,
    EditorModule,
  ],

  exports: [
    DropdownModule,
    CheckboxModule,
    FileUploadModule,
    RatingModule,
    EditorModule,
  ]

})
export class NgPrimeModule {
}
