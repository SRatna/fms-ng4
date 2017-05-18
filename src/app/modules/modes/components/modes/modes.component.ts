import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Mode } from '../../classes/mode';
@Component({
  selector: 'app-modes',
  templateUrl: './modes.component.html',
  styleUrls: ['./modes.component.css']
})
export class ModesComponent implements OnInit {

  mode = new Mode();
  modes: Mode[];
  private Url = 'http://localhost/advanced/api/web/v1/modes';


  constructor(private commonService: CommonService) { }

  save(): void {
    this.commonService.create(this.mode, this.Url)
      .subscribe(obj => this.modes.push(obj), error => console.log(error));
  }

  deleteMode(mode: Mode): void {
    if (confirm('Do you really want to delete?')) {
      this.commonService.remove(mode, this.Url)
        .subscribe(deletedObj => this.modes = this.modes.filter(o => o !== deletedObj), err => console.log(err));
    }

  }

  getModes(): void {
    this.commonService
      .getObjects(this.Url)
      .subscribe(objects => this.modes = objects, err => console.log(err));
  }

  ngOnInit() {
    this.getModes();
  }

}
