import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradesComponent } from './components/grades/grades.component';

const appRoutes: Routes = [
  { path: 'grades', component: GradesComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GradesRoutingModule { }
