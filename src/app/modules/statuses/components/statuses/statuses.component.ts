import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Status } from '../../classes/status';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.css']
})
export class StatusesComponent implements OnInit {

  status = new Status();
  statuses: Status[];
  private Url = 'http://localhost/advanced/api/web/v1/statuses';
  duplicity: boolean;
  duplicityErrorMsg: string;

  constructor(private commonService: CommonService) { }

  save(myForm: FormGroup): void {
    this.commonService.checkDuplicity(this.status, this.Url).subscribe(obj => {
        this.duplicity = obj.duplicity;
        if (this.duplicity) {
          this.duplicityErrorMsg = 'Sorry, name already exists.';
        } else {
          this.commonService.create(this.status, this.Url)
            .subscribe(obj => {
              myForm.reset();
              this.statuses.push(obj);
        }, error => console.log(error));
        }
      }, e => console.log(e)
    );
  }

  deleteStatus(status: Status): void {
    if (confirm('Do you really want to delete?')) {
      this.commonService.remove(status, this.Url)
        .subscribe(deletedObj => this.statuses = this.statuses.filter(o => o !== deletedObj), err => console.log(err));
    }

  }

  getStatuses(): void {
    this.commonService
      .getObjects(this.Url)
      .subscribe(objects => this.statuses = objects, err => console.log(err));
  }

  ngOnInit() {
    this.getStatuses();
  }

}
