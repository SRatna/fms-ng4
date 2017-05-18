import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypesComponent } from './components/types/types.component';

const appRoutes: Routes = [
  { path: 'types', component: TypesComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TypesRoutingModule { }
