import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import * as _ from 'underscore';
import { SubDepartment } from '../../classes/sub-department';
import { Department } from '../../../departments/classes/department';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sub-department',
  templateUrl: './sub-department.component.html',
  styleUrls: ['./sub-department.component.css']
})
export class SubDepartmentComponent implements OnInit {

  subDepartment = new SubDepartment();
  subDepartments: SubDepartment[] = [];
  departments: Department[];
  private subDepartmentsUrl = 'http://localhost/advanced/api/web/v1/subdepartments';
  private departmentsUrl = 'http://localhost/advanced/api/web/v1/departments';
  duplicity: boolean;
  duplicityErrorMsg: string;
  selectedDepartment: string;
  subDepartmentsByDepartments: SubDepartment[] = [];

  constructor(private commonService: CommonService) { }

  changeDepartments(department: string) {
    this.subDepartmentsByDepartments = this.subDepartments.filter(sd => sd.department === department);
  }

  save(myForm: FormGroup): void {
    this.commonService.checkDuplicity(this.subDepartment, this.subDepartmentsUrl).subscribe(obj => {
        this.duplicity = obj.duplicity;
        if (this.duplicity) {
          this.duplicityErrorMsg = 'Sorry, name already exists.';
        } else {
          this.commonService.create(this.subDepartment, this.subDepartmentsUrl).subscribe(subdepartment => {
            const itsDepartment = _.findWhere(this.departments, {id: subdepartment.department_id});
            subdepartment.department = itsDepartment.name;
            this.subDepartments.push(subdepartment);
            if (this.selectedDepartment != null) {
              if (this.selectedDepartment === itsDepartment.name) {
                this.subDepartmentsByDepartments.push(subdepartment);
              }
            }
            myForm.reset();
          }, error => console.log(error));
        }
      }, e => console.log(e)
    );
  }

  deleteSubDepartment(subdepartment: SubDepartment): void {
    if (confirm('Do you really want to delete?')) {
      this.commonService.remove(subdepartment, this.subDepartmentsUrl)
        .subscribe(deletedSubDepartment =>
          this.subDepartments = this.subDepartments.filter(sd => sd !== deletedSubDepartment), err => console.log(err));
    }
  }

  getDepartmentsAndSubDepartments(): void {
    this.commonService
      .getObjects(this.departmentsUrl)
      .subscribe(departments => {
        this.departments = departments;
        this.commonService
          .getObjects(this.subDepartmentsUrl)
          .subscribe(subdepartments => {
            for (const mySubDepartment of subdepartments){
              const itsDepartment = _.findWhere(this.departments, {id: mySubDepartment.department_id});
              mySubDepartment.department = itsDepartment.name;
              // console.log(myDepartment);
              this.subDepartments.push(mySubDepartment);
            }
          } , err => console.log(err));
      }, err => console.log(err));
  }

  ngOnInit() {
    this.getDepartmentsAndSubDepartments();
  }

}
