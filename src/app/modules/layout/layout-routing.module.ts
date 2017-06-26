import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout.component';
import { DashboardComponent } from '../dashboard/components/dashboard.component';
import { BranchComponent } from '../branches/components/branch/branch.component';
import { CategoriesComponent } from '../categories/components/categories/categories.component';
import { DepartmentComponent } from '../departments/components/department/department.component';
import { SubDepartmentComponent } from '../sub-departments/components/sub-department/sub-department.component';
import { StatusesComponent } from '../statuses/components/statuses/statuses.component';
import { TypesComponent } from '../types/components/types/types.component';
import { ModesComponent } from '../modes/components/modes/modes.component';
import { GradesComponent } from '../grades/components/grades/grades.component';
import { DesignationsComponent } from '../designations/components/designations/designations.component';
import { ProjectsComponent } from '../projects/components/projects/projects.component';

import { NewEmployeeComponent } from '../employees/components/new-employee/new-employee.component';
const appRoutes: Routes = [
  {
    path: 'fms',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'register-employee',
        component:NewEmployeeComponent
      },
      {
        path: 'branch',
        component: BranchComponent
      },
      {
        path: 'category',
        component: CategoriesComponent
      },
      {
        path: 'department',
        component: DepartmentComponent
      },
      {
        path: 'sub-department',
        component: SubDepartmentComponent
      },
      {
        path: 'status',
        component: StatusesComponent
      },
      {
        path: 'type',
        component: TypesComponent
      },
      {
        path: 'mode',
        component: ModesComponent
      },
      {
        path: 'grade',
        component: GradesComponent
      },
      {
        path: 'designation',
        component: DesignationsComponent
      },
      {
        path: 'project',
        component: ProjectsComponent  
      }

    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule { }
