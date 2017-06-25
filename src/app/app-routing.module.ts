import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { AccountComponent } from './modules/account/components/account.component';
import { LayoutComponent } from "./modules/layout/components/layout.component";
const appRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent
  },
  { path: '**', component: PageNotFoundComponent },

//{paht:'/dash'}

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
