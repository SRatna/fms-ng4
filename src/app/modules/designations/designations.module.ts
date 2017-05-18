import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { CustomMaterialModule } from '../../custom-material.module';
import { DesignationsComponent } from './components/designations/designations.component';
import { DesignationsRoutingModule } from './designations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    DesignationsRoutingModule
  ],
  declarations: [DesignationsComponent]
})
export class DesignationsModule { }
