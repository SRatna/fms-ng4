import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { CustomMaterialModule } from '../../custom-material.module';
import { StatusesRoutingModule } from './statuses-routing.module';
import { StatusesComponent } from './components/statuses/statuses.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    StatusesRoutingModule
  ],
  declarations: [StatusesComponent]
})
export class StatusesModule { }
