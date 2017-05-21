import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Type } from '../../classes/type';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  type = new Type();
  types: Type[];
  private Url = 'http://localhost/advanced/api/web/v1/types';
  duplicity: boolean;
  duplicityErrorMsg: string;

  constructor(private commonService: CommonService) { }

  save(myForm: FormGroup): void {
    this.commonService.checkDuplicity(this.type, this.Url).subscribe(obj => {
        this.duplicity = obj.duplicity;
        if (this.duplicity) {
          this.duplicityErrorMsg = 'Sorry, name already exists.';
        } else {
          this.commonService.create(this.type, this.Url)
            .subscribe(obj => {
              this.types.push(obj);
              myForm.reset();
        }, error => console.log(error));
        }
      }, e => console.log(e)
    );
  }

  deleteType(type: Type): void {
    if (confirm('Do you really want to delete?')) {
      this.commonService.remove(type, this.Url)
        .subscribe(deletedObj => this.types = this.types.filter(o => o !== deletedObj), err => console.log(err));
    }

  }

  getTypes(): void {
    this.commonService
      .getObjects(this.Url)
      .subscribe(objects => this.types = objects, err => console.log(err));
  }

  ngOnInit() {
    this.getTypes();
  }

}
