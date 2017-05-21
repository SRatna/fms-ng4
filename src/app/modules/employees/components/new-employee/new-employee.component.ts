import { Component, OnInit } from '@angular/core';
import { Employee } from '../../classes/employee';
import { Branch } from '../../../branches/classes/branch';
import { Department } from '../../../departments/classes/department';
import { SubDepartment } from '../../../sub-departments/classes/sub-department';
import { Grade } from '../../../grades/classes/grade';
import { Mode } from '../../../modes/classes/mode';
import { Type } from '../../../types/classes/type';
import { Status } from '../../../statuses/classes/status';
import { Designation } from '../../../designations/classes/designation';
import { RegisteredUser } from '../../../registered-users/classes/registered-user';
import { CommonService } from '../../../../services/common.service';
import * as _ from 'underscore';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  employee = new Employee();
  employees: Employee[] = [];

  branches: Branch[];
  departments: Department[];
  subDepartments: SubDepartment[];
  grades: Grade[];
  modes: Mode[];
  types: Type[];
  statuses: Status[];
  designations: Designation[];
  registeredUsers: RegisteredUser[];

  private branchesUrl = 'http://localhost/advanced/api/web/v1/branches';
  private departmentsUrl = 'http://localhost/advanced/api/web/v1/departments';
  private subDepartmentsUrl = 'http://localhost/advanced/api/web/v1/subdepartments';
  private gradesUrl = 'http://localhost/advanced/api/web/v1/grades';
  private modesUrl = 'http://localhost/advanced/api/web/v1/modes';
  private typesUrl = 'http://localhost/advanced/api/web/v1/types';
  private statusesUrl = 'http://localhost/advanced/api/web/v1/statuses';
  private designationsUrl = 'http://localhost/advanced/api/web/v1/designations';
  private registeredUsersUrl = 'http://localhost/advanced/api/web/v1/registerusers';
  private saveEmployeesUrl = 'http://localhost/advanced/api/web/v1/employee/create-employee';

  constructor(private commonService: CommonService) { }

  save(myForm: FormGroup): void {
    this.commonService.create(this.employee, this.saveEmployeesUrl)
      .subscribe(obj => {
        // const foundBranch = _.findWhere(this.branches, {id: obj.branch_id});
        // const foundDepartment = _.findWhere(this.departments, {id: obj.department_id});
        // const foundSubDepartment = _.findWhere(this.subDepartments, {id: obj.sub_department_id});
        // const foundGrade = _.findWhere(this.grades, {id: obj.grade_id});
        // const foundType = _.findWhere(this.types, {id: obj.type_id});
        // const foundDesignation = _.findWhere(this.designations, {id: obj.designation_id});
        // const foundMode = _.findWhere(this.modes, {id: obj.mode_id});
        // const foundStatus = _.findWhere(this.statuses, {id: obj.status_id});
        // const foundRegisteredUser = _.findWhere(this.registeredUsers, {id: obj.reg_id});
        // obj.branch = foundBranch.name;
        // obj.department = foundDepartment.name;
        // obj.sub_department = foundSubDepartment.name;
        // obj.grade = foundGrade.name;
        // obj.type = foundType.name;
        // obj.designation = foundDesignation.name;
        // obj.mode = foundMode.name;
        // obj.status = foundStatus.name;
        // obj.reg_username = foundRegisteredUser.name;
        // this.employees.push(obj);
        // console.log(obj);
        myForm.reset();
      }, error => console.log(error));
  }

  getBranches(): void {
    this.commonService
      .getObjects(this.branchesUrl)
      .subscribe(branches => this.branches = branches, err => console.log(err));
  }

  getDepartments(): void {
    this.commonService
      .getObjects(this.departmentsUrl)
      .subscribe(objects => this.departments = objects, err => console.log(err));
  }

  getSubDepartments(): void {
    this.commonService
      .getObjects(this.subDepartmentsUrl)
      .subscribe(objects => this.subDepartments = objects, err => console.log(err));
  }

  getGrades(): void {
    this.commonService
      .getObjects(this.gradesUrl)
      .subscribe(objects => this.grades = objects, err => console.log(err));
  }

  getModes(): void {
    this.commonService
      .getObjects(this.modesUrl)
      .subscribe(objects => this.modes = objects, err => console.log(err));
  }

  getTypes(): void {
    this.commonService
      .getObjects(this.typesUrl)
      .subscribe(objects => this.types = objects, err => console.log(err));
  }

  getStatuses(): void {
    this.commonService
      .getObjects(this.statusesUrl)
      .subscribe(objects => this.statuses = objects, err => console.log(err));
  }

  getDesignations(): void {
    this.commonService
      .getObjects(this.designationsUrl)
      .subscribe(objects => this.designations = objects, err => console.log(err));
  }

  getRegisteredUsers(): void {
    this.commonService
      .getObjects(this.registeredUsersUrl)
      .subscribe(objects => this.registeredUsers = objects, err => console.log(err));
  }


  ngOnInit() {
    this.getStatuses();
    this.getBranches();
    this.getGrades();
    this.getDesignations();
    this.getDepartments();
    this.getSubDepartments();
    this.getTypes();
    this.getModes();
    this.getRegisteredUsers();
  }

}
