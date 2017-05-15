import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { CustomMaterialModule } from '../../custom-material.module';
@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
  ],
  declarations: [NewEmployeeComponent]
})
export class EmployeesModule { }
