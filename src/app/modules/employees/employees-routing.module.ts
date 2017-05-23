import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { EmployeesComponent } from './components/employees/employees.component';

const appRoutes: Routes = [
  { path: 'add-new-employee', component: NewEmployeeComponent },
  { path: 'employees', component: EmployeesComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeesRoutingModule { }
