import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account.component';
import { LoginComponent } from './components/login.component';
import { AuthGuard } from '../../services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: AccountComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: LoginComponent

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
export class AccountRoutingModule { }
