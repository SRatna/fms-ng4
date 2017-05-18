import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { CustomMaterialModule } from '../../custom-material.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ProjectsRoutingModule
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
