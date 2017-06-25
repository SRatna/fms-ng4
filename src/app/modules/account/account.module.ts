import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { CustomMaterialModule } from '../../custom-material.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './components/account.component';
import { LoginComponent } from './components/login.component';

@NgModule({
  declarations: [AccountComponent,LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AccountRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
  ],
  providers: []
})
export class AccountModule { }
