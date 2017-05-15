import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEmployeeComponent } from './components/branch/';

const appRoutes: Routes = [
  { path: 'add-new-employee', component: NewEmployeeComponent },
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
