import { Department } from '../../classes/department';
import { DepartmentsService } from '../../services/departments.service';
import { Component, OnInit } from '@angular/core';
import { BranchesService } from '../../../branches/services/branches.service';
import { Branch } from '../../../branches/classes/branch';
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

  constructor(private departmentsService: DepartmentsService, private branchesService: BranchesService) { }

  save(): void {
    this.departmentsService.create(this.department).subscribe(department => {
      const newBranch = _.findWhere(this.branches, {id: department.branch_id});
      department.branch = newBranch.name;
      this.departments.push(department);
    }, error => console.log(error));
  }

  deleteDepartment(department: Department): void {
    if (confirm('Do you really want to delete?')) {
      this.departmentsService.deleteDepartment(department)
        .subscribe(deletedDepartment => this.departments = this.departments.filter(d => d !== deletedDepartment), err => console.log(err));
    }

  }

  getBranchesAndDepartments(): void {
    this.branchesService
      .getBranches()
      .subscribe(branches => {
        this.branches = branches;
        this.departmentsService
          .getDepartments()
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

