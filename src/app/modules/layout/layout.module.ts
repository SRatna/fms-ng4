import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { LayoutComponent } from './components/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './components/header.component';
import { SidebarComponent } from './components/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent]
})
export class LayoutModule { }
