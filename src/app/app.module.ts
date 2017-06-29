import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {EmployeesModule} from './modules/employees/employees.module';
import {BranchesModule} from './modules/branches/branches.module';
import {DepartmentsModule} from './modules/departments/departments.module';
import {SubDepartmentsModule} from './modules/sub-departments/sub-departments.module';
import {CategoriesModule} from './modules/categories/categories.module';
import {CountriesModule} from './modules/countries/countries.module';
import {DesignationsModule} from './modules/designations/designations.module';
import {GradesModule} from './modules/grades/grades.module';
import {ModesModule} from './modules/modes/modes.module';
import {TypesModule} from './modules/types/types.module';
import {StatusesModule} from './modules/statuses/statuses.module';
import {ProjectsModule} from './modules/projects/projects.module';
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
    BranchesModule,
    DepartmentsModule,
    SubDepartmentsModule,
    CategoriesModule,
    CountriesModule,
    DesignationsModule,
    GradesModule,
    ModesModule,
    TypesModule,
    StatusesModule,
    ProjectsModule,
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
