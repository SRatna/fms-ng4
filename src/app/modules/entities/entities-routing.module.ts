import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntitiesComponent } from './components/entities.component';

const appRoutes: Routes = [
 // { path: 'grades', component: GradesComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EntitiesRoutingModule { }
