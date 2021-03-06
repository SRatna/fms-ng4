import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NewEmployeeComponent} from './components/new-employee/new-employee.component';
import {EmployeesRoutingModule} from './employees-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {CustomMaterialModule} from '../../custom-material.module';
import {EmployeesComponent} from './components/employees/employees.component';
import {EmployeeAttendenceComponent} from './components/employee-attendence/employee-attendence.component';
@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [NewEmployeeComponent, EmployeesComponent, EmployeeAttendenceComponent]
})
export class EmployeesModule {}
