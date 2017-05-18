import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Status } from '../../classes/status';
@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.css']
})
export class StatusesComponent implements OnInit {

  status = new Status();
  statuses: Status[];
  private Url = 'http://localhost/advanced/api/web/v1/statuses';


  constructor(private commonService: CommonService) { }

  save(): void {
    this.commonService.create(this.status, this.Url)
      .subscribe(obj => this.statuses.push(obj), error => console.log(error));
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
