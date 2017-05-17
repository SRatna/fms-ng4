import {NgModule} from '@angular/core';
import {
  MdButtonModule, MdCheckboxModule,
  MdToolbarModule, MdSidenavModule,
  MdListModule, MdGridListModule, MdCardModule,
  MdInputModule, MdSelectModule, MdIconModule
} from '@angular/material';
import { MdDataTableModule } from 'ng2-md-datatable';

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
    MdDataTableModule
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
    MdDataTableModule
  ],
})
export class CustomMaterialModule { }
