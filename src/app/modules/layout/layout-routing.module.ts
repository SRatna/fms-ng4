import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout.component';
import {DashboardComponent} from '../dashboard/components/dashboard.component';
import {BranchComponent} from '../branches/components/branch/branch.component';
import {CategoriesComponent} from '../categories/components/categories/categories.component';
import {DepartmentComponent} from '../departments/components/department/department.component';
import {SubDepartmentComponent} from '../sub-departments/components/sub-department/sub-department.component';
import {StatusesComponent} from '../statuses/components/statuses/statuses.component';
import {TypesComponent} from '../types/components/types/types.component';
import {ModesComponent} from '../modes/components/modes/modes.component';
import {GradesComponent} from '../grades/components/grades/grades.component';
import {DesignationsComponent} from '../designations/components/designations/designations.component';
import {ProjectsComponent} from '../projects/components/projects/projects.component';
import {EmployeeAttendenceComponent} from '../employees/components/employee-attendence/employee-attendence.component';
import {NewEmployeeComponent} from '../employees/components/new-employee/new-employee.component';
import {EntitiesComponent} from '../entities/components/entities.component';
import {EmployeesComponent} from '../employees/components/employees/employees.component';
import { AuthGuard } from '../../services/auth-guard.service';
const appRoutes : Routes = [
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
