import { Department } from '../../classes/department';
import { Component, OnInit } from '@angular/core';
import { Branch } from '../../../branches/classes/branch';
import { CommonService } from '../../../../services/common.service';
import * as _ from 'underscore';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  duplicity: boolean;
  duplicityErrorMsg: string;
  department = new Department();
  departments: Department[] = [];
  branches: Branch[];
  private departmentsUrl = 'http://localhost/advanced/api/web/v1/departments';
  private branchesUrl = 'http://localhost/advanced/api/web/v1/branches';
  selectedBranch: string;
  departmentsByBranch: Department[] = [];


  constructor(private commonService: CommonService) { }

  changeDepartments(branch: string) {
    this.departmentsByBranch = this.departments.filter(d => d.branch === branch);
  }

  save(myForm: FormGroup): void {
    this.commonService.checkDuplicity(this.department, this.departmentsUrl).subscribe(obj => {
        this.duplicity = obj.duplicity;
        if (this.duplicity) {
          this.duplicityErrorMsg = 'Sorry, name already exists.';
        } else {
          this.commonService.create(this.department, this.departmentsUrl).subscribe(department => {
            const newBranch = _.findWhere(this.branches, {id: department.branch_id});
            department.branch = newBranch.name;
            this.departments.push(department);
            myForm.reset();
          }, error => console.log(error));
        }
      }, e => console.log(e)
    );

  }

  deleteDepartment(department: Department): void {
    if (confirm('Do you really want to delete?')) {
      this.commonService.remove(department, this.departmentsUrl)
        .subscribe(deletedDepartment => this.departments = this.departments.filter(d => d !== deletedDepartment), err => console.log(err));
    }

  }

  getBranchesAndDepartments(): void {
    this.commonService
      .getObjects(this.branchesUrl)
      .subscribe(branches => {
        this.branches = branches;
        this.commonService
          .getObjects(this.departmentsUrl)
          .subscribe(departments => {
            for (const myDepartment of departments){
              const newBranch = _.findWhere(branches, {id: myDepartment.branch_id});
              myDepartment.branch = newBranch.name;
              // console.log(myDepartment);
              this.departments.push(myDepartment);
            }
          } , err => console.log(err));
      }, err => console.log(err));
  }

  ngOnInit() {
    this.getBranchesAndDepartments();
  }

}

