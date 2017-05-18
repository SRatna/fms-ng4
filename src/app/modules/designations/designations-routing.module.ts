import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignationsComponent } from './components/designations/designations.component';

const appRoutes: Routes = [
  { path: 'designations', component: DesignationsComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DesignationsRoutingModule { }
