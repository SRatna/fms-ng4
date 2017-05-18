import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModesComponent } from './components/modes/modes.component';

const appRoutes: Routes = [
  { path: 'modes', component: ModesComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModesRoutingModule { }
