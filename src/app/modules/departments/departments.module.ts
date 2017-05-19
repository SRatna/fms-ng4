import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { CustomMaterialModule } from '../../custom-material.module';
import { DepartmentComponent } from './components/department/department.component';
import { DepartmentsRoutingModule } from './departments-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    DepartmentsRoutingModule
  ],
  providers: [],
  declarations: [DepartmentComponent]
})
export class DepartmentsModule { }
