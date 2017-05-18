import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { CustomMaterialModule } from '../../custom-material.module';
import { SubDepartmentComponent } from './components/sub-department/sub-department.component';
import { SubDepartmentsRoutingModule } from './sub-departments-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    SubDepartmentsRoutingModule
  ],
  providers: [],
  declarations: [SubDepartmentComponent]
})
export class SubDepartmentsModule { }

