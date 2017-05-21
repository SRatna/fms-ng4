import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Designation } from '../../classes/designation';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.css']
})
export class DesignationsComponent implements OnInit {
  duplicity: boolean;
  duplicityErrorMsg: string;
  designation = new Designation();
  designations: Designation[];
  private Url = 'http://localhost/advanced/api/web/v1/designations';


  constructor(private commonService: CommonService) { }

  save(myForm: FormGroup): void {
    this.commonService.checkDuplicity(this.designation, this.Url).subscribe(obj => {
        this.duplicity = obj.duplicity;
        if (this.duplicity) {
          this.duplicityErrorMsg = 'Sorry, name already exists.';
        } else {
          this.commonService.create(this.designation, this.Url)
            .subscribe(obj => {
              this.designations.push(obj);
              myForm.reset();
            }, error => console.log(error));
        }
      }, e => console.log(e)
    );
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
