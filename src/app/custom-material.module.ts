import {NgModule} from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule } from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule],
  exports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule],
})
export class CustomMaterialModule { }
