import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {EmployeesModule} from './modules/employees/employees.module';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {AccountModule} from './modules/account/account.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from './modules/layout/layout.module';
import {EntitiesModule} from './modules/entities/entities.modules';
import 'hammerjs';
import {CustomMaterialModule} from './custom-material.module';
import {PageNotFoundComponent} from './page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {CommonService} from './services/common.service';
import {AuthGuard} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {DataService} from './services/data.service';

@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    LayoutModule,
    EmployeesModule,
    DashboardModule,
    AccountModule,
    AppRoutingModule,
    EntitiesModule,
  ],
  providers: [
    CommonService, AuthGuard, AuthService, DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
