import {NgModule} from '@angular/core';
import {MdButtonModule, MdCheckboxModule,
        MdToolbarModule, MdSidenavModule,
        MdListModule, MdGridListModule,
        MdInputModule, MdSelectModule} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdGridListModule,
    MdInputModule,
    MdSelectModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdGridListModule,
    MdInputModule,
    MdSelectModule
  ],
})
export class CustomMaterialModule { }
