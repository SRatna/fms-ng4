import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EmployeesModule } from './modules/employees/employees.module';
import { BranchesModule } from './modules/branches/branches.module';
import { DepartmentsModule } from './modules/departments/departments.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { CustomMaterialModule } from './custom-material.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    HttpModule,
    EmployeesModule,
    BranchesModule,
    DepartmentsModule,
    AppRoutingModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
