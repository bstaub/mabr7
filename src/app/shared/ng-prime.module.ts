import { NgModule } from '@angular/core';
import { CheckboxModule, DropdownModule, EditorModule, FileUploadModule } from 'primeng/primeng';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingModule } from 'primeng/rating';


@NgModule({
  declarations: [],

  imports: [
    // BrowserAnimationsModule,  // in conflikt with browsermodule!
    DropdownModule,
    CheckboxModule,
    FileUploadModule,
    RatingModule,
    EditorModule,
  ],

  exports: [
    // BrowserAnimationsModule,
    DropdownModule,
    CheckboxModule,
    FileUploadModule,
    RatingModule,
    EditorModule,
  ]

})
export class NgPrimeModule {
}
