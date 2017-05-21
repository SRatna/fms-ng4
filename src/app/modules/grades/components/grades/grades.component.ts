import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Grade } from '../../classes/grade';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  duplicity: boolean;
  duplicityErrorMsg: string;
  grade = new Grade();
  grades: Grade[];
  private Url = 'http://localhost/advanced/api/web/v1/grades';


  constructor(private commonService: CommonService) { }

  save(myForm: FormGroup): void {
    this.commonService.checkDuplicity(this.grade, this.Url).subscribe(obj => {
        this.duplicity = obj.duplicity;
        if (this.duplicity) {
          this.duplicityErrorMsg = 'Sorry, name already exists.';
        } else {
          this.commonService.create(this.grade, this.Url)
            .subscribe(obj => {
              this.grades.push(obj);
              myForm.reset();
        }, error => console.log(error));
        }
      }, e => console.log(e)
    );
  }

  deleteGrade(grade: Grade): void {
    if (confirm('Do you really want to delete?')) {
      this.commonService.remove(grade, this.Url)
        .subscribe(deletedObj => this.grades = this.grades.filter(o => o !== deletedObj), err => console.log(err));
    }

  }

  getGrades(): void {
    this.commonService
      .getObjects(this.Url)
      .subscribe(objects => this.grades = objects, err => console.log(err));
  }

  ngOnInit() {
    this.getGrades();
  }

}
