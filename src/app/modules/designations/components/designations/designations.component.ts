import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Designation } from '../../classes/designation';
import { FormGroup } from '@angular/forms';
import { DataService } from '../../../../services/data.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.css']
})
export class DesignationsComponent implements OnInit {
  duplicity: boolean;
  duplicityErrorMsg: string;
  designation = new Designation();
  designations: any;
  private Url: string;


  constructor(private commonService: CommonService, private dataService: DataService) { }

  save(myForm: FormGroup): void {

    this.dataService.saveData(this.Url, this.designation)
      .subscribe((response: Response) => {
        this.designations.push(response.json());
      }, error => console.log(error))  ;

  }

  deleteDesignation(designation: Designation): void {
    if (confirm('Do you really want to delete?')) {
      this.commonService.remove(designation, this.Url)
        .subscribe(deletedObj => this.designations = this.designations.filter(o => o !== deletedObj), err => console.log(err));
    }

  }

  getDesignations(): void {
    this.dataService
      .getDatas(this.Url)
      .subscribe((designations: Response) => {
        this.designations = designations.json().objects;
      }, err => console.log(err));
  }

  ngOnInit() {
    this.Url = this.commonService.getServer() + 'designation';
    this.getDesignations();
  }

}
