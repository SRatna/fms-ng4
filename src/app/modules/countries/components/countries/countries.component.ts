import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Country } from '../../classes/country';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  country = new Country();
  countries: Country[];
  private countriesUrl = 'http://localhost/advanced/api/web/v1/countries';


  constructor(private commonService: CommonService) { }

  save(): void {
    this.commonService.create(this.country, this.countriesUrl).subscribe(obj => this.countries.push(obj), error => console.log(error));
    // this.branch = {id: 0, name: ' '};
  }

  deleteCountry(country: Country): void {
    if (confirm('Do you really want to delete?')) {
      this.commonService.remove(country, this.countriesUrl)
        .subscribe(deletedObj => this.countries = this.countries.filter(o => o !== deletedObj), err => console.log(err));
    }

  }

  getCountries(): void {
    this.commonService
      .getObjects(this.countriesUrl)
      .subscribe(objects => this.countries = objects, err => console.log(err));
  }

  ngOnInit() {
    this.getCountries();
  }

}
