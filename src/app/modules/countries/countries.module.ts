import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { CustomMaterialModule } from '../../custom-material.module';
import { CountriesComponent } from './components/countries/countries.component';
import { CountriesRoutingModule } from './countries-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    CountriesRoutingModule
  ],
  declarations: [CountriesComponent]
})
export class CountriesModule { }

