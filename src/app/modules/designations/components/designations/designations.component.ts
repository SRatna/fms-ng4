import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Designation } from '../../classes/designation';

@Component({
  selector: 'app-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.css']
})
export class DesignationsComponent implements OnInit {

  designation = new Designation();
  designations: Designation[];
  private Url = 'http://localhost/advanced/api/web/v1/designations';


  constructor(private commonService: CommonService) { }

  save(): void {
    this.commonService.create(this.designation, this.Url)
      .subscribe(obj => this.designations.push(obj), error => console.log(error));
  }

  deleteDesignation(designation: Designation): void {
    if (confirm('Do you really want to delete?')) {
      this.commonService.remove(designation, this.Url)
        .subscribe(deletedObj => this.designations = this.designations.filter(o => o !== deletedObj), err => console.log(err));
    }

  }

  getDesignations(): void {
    this.commonService
      .getObjects(this.Url)
      .subscribe(objects => this.designations = objects, err => console.log(err));
  }

  ngOnInit() {
    this.getDesignations();
  }

}
