import { Department } from '../../classes/department';
import { Component, OnInit } from '@angular/core';
import { Branch } from '../../../branches/classes/branch';
import { CommonService } from '../../../../services/common.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  department = new Department();
  departments: Department[] = [];
  branches: Branch[];
  private departmentsUrl = 'http://localhost/advanced/api/web/v1/departments';
  private branchesUrl = 'http://localhost/advanced/api/web/v1/branches';


  constructor(private commonService: CommonService) { }

  save(): void {
    this.commonService.create(this.department, this.departmentsUrl).subscribe(department => {
      const newBranch = _.findWhere(this.branches, {id: department.branch_id});
      department.branch = newBranch.name;
      this.departments.push(department);
    }, error => console.log(error));
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

