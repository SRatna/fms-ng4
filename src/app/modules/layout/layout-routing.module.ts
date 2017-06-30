import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout.component';
import {DashboardComponent} from '../dashboard/components/dashboard.component';
import {EmployeeAttendenceComponent} from '../employees/components/employee-attendence/employee-attendence.component';
import {NewEmployeeComponent} from '../employees/components/new-employee/new-employee.component';
import {EntitiesComponent} from '../entities/components/entities.component';
import {EmployeesComponent} from '../employees/components/employees/employees.component';
import { AuthGuard } from '../../services/auth-guard.service';
const appRoutes: Routes = [
  {
    path: 'fms',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      }, {
        path: 'employees',
        component: EmployeesComponent
      }, {
        path: 'register-employee',
        component: NewEmployeeComponent
      }, {
        path: 'register-employee/:id',
        component: NewEmployeeComponent
      }, {
        path: 'entities',
        component: EntitiesComponent
      }, {
        path: 'employee-attendence',
        component: EmployeeAttendenceComponent
      }

    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
