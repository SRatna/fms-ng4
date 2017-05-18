import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusesComponent } from './components/statuses/statuses.component';

const appRoutes: Routes = [
  { path: 'statuses', component: StatusesComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StatusesRoutingModule { }
