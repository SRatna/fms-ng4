import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './components/branch/branch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { CustomMaterialModule } from '../../custom-material.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  declarations: [BranchComponent]
})
export class BranchesModule { }
