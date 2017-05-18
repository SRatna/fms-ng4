import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubDepartmentComponent } from './components/sub-department/sub-department.component';

const appRoutes: Routes = [
  { path: 'sub-departments', component: SubDepartmentComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SubDepartmentsRoutingModule { }
