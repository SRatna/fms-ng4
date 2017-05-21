import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Mode } from '../../classes/mode';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modes',
  templateUrl: './modes.component.html',
  styleUrls: ['./modes.component.css']
})
export class ModesComponent implements OnInit {
  duplicity: boolean;
  mode = new Mode();
  modes: Mode[];
  private Url = 'http://localhost/advanced/api/web/v1/modes';
  duplicityErrorMsg: string;

  constructor(private commonService: CommonService) { }

  save(myForm: FormGroup): void {
    this.commonService.checkDuplicity(this.mode, this.Url).subscribe(obj => {
        this.duplicity = obj.duplicity;
        if (this.duplicity) {
          this.duplicityErrorMsg = 'Sorry, name already exists.';
        } else {
          this.commonService.create(this.mode, this.Url)
            .subscribe(obj => {
              this.modes.push(obj);
              myForm.reset();
        }, error => console.log(error));
        }
      }, e => console.log(e)
    );
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
