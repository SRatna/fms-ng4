import {NgModule} from '@angular/core';
import {
  MdButtonModule, MdCheckboxModule,
  MdToolbarModule, MdSidenavModule,
  MdListModule, MdGridListModule, MdCardModule,
  MdInputModule, MdSelectModule, MdIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdGridListModule,
    MdInputModule,
    MdSelectModule,
    MdIconModule,
    MdCardModule,
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdGridListModule,
    MdInputModule,
    MdSelectModule,
    MdIconModule,
    MdCardModule,
  ],
})
export class CustomMaterialModule { }
