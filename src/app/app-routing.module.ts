import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/fms',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent },

// {paht:'/dash'}

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
