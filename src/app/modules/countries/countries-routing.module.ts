import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';

const appRoutes: Routes = [
  { path: 'countries', component: CountriesComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CountriesRoutingModule { }
