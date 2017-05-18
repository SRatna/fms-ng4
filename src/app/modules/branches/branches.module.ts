import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { CustomMaterialModule } from '../../custom-material.module';
import { BrachesRoutingModule } from './branches-routing.module';
// import { BranchesService } from './services/branches.service';
import { BranchComponent } from './components/branch/branch.component';

@NgModule({
  declarations: [BranchComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrachesRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
  ],
  providers: []
})
export class BranchesModule { }
