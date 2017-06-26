import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { CustomMaterialModule } from '../../custom-material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard.component';

@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    DashboardRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule],
    declarations: [DashboardComponent]
})
export class DashboardModule { };