import { Department } from '../../classes/department';
import { Component, OnInit } from '@angular/core';
import { Branch } from '../../../branches/classes/branch';
import { CommonService } from '../../../../services/common.service';
import { DataService } from '../../../../services/data.service';
import * as _ from 'underscore';
import { FormGroup } from '@angular/forms';
import { isUndefined } from "util";
import { Response } from '@angular/http';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  duplicity: boolean;
  duplicityErrorMsg: string;
  department = new Department();
  departments: any;
  branches: any;
  departmentsUrl: string;
  selectedBranch: string;
  branchUrl: string;
  departmentsByBranch: Department[] = [];


  constructor(private commonService: CommonService, private dataService: DataService) { }

  changeBranches(branch: string) {
    this.departmentsByBranch = this.departments.filter(d => d.branch === branch);
  }

  save(myForm: FormGroup): void {

    this.dataService.saveData(this.departmentsUrl,this.department)
      .subscribe((response: Response) => {
        this.departments.push(response.json());
    })

    // this.commonService.checkDuplicity(this.department, this.departmentsUrl).subscribe(obj => {
    //     this.duplicity = obj.duplicity;
    //     if (this.duplicity) {
    //       this.duplicityErrorMsg = 'Sorry, name already exists.';
    //     } else {
    //       this.commonService.create(this.department, this.departmentsUrl).subscribe(department => {
    //         const newBranch = _.findWhere(this.branches, {id: department.branch_id});
    //         department.branch = newBranch.name;
    //         this.departments.push(department);
    //         if (this.selectedBranch != null) {
    //           if (this.selectedBranch === newBranch.name) {
    //             this.departmentsByBranch.push(department);
    //           }
    //         }
    //         myForm.reset();
    //       }, error => console.log(error));
    //     }
    //   }, e => console.log(e)
    // );

  }

  deleteDepartment(department: Department): void {
    if (confirm('Do you really want to delete?')) {
      this.commonService.remove(department, this.departmentsUrl)
        .subscribe(deletedDepartment => this.departments = this.departments.filter(d => d !== deletedDepartment), err => console.log(err));
    }

  }

  getBranchesAndDepartments(): void {
    this.dataService
      .getDatas(this.branchUrl).subscribe((response: Response) => {
        this.branches = response.json().objects;
      });
    this.dataService
      .getDatas(this.departmentsUrl)
      .subscribe((response: Response) => {
        this.departments = response.json().objects;
    })

  }

  ngOnInit() {
    this.getBranchesAndDepartments();
    this.branchUrl = this.commonService.getServer() + 'branch';
    this.departmentsUrl = this.commonService.getServer + 'department';


  }

}

