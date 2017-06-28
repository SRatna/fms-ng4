import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {CustomMaterialModule} from '../../custom-material.module';
import {EntitiesComponent} from './components/entities.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  declarations: [EntitiesComponent]
})
export class EntitiesModule {}