import { Component, OnInit,AfterViewInit } from '@angular/core';
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
import { DataService } from '../../../../services/data.service';
import { Response } from '@angular/http';
import * as _ from 'underscore';
import { FormGroup } from '@angular/forms';
declare let jQuery: any;
@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit,AfterViewInit {

  employee = new Employee();
  branches: any;
  departments: any;
  subDepartments: any;
  grades: any;
  modes: any;
  types: any;
  statuses: any;
  designations: any;
  registeredUsers: any;
  server: any;
  branchesUrl: any;
  departmentsUrl: any;
  subDepartmentsUrl: any;
  gradesUrl: any;
  modesUrl: any;
  typesUrl: any;
  statusesUrl: any;
  designationsUrl: any;
  registeredUsersUrl: any;
  saveEmployeesUrl: string;

  constructor(private commonService: CommonService, private dataService: DataService) { }


  registerEmployee(myForm: FormGroup): void {
    this.dataService.saveData(this.saveEmployeesUrl, this.employee)
      .subscribe(obj => {
        myForm.reset();
      }, error => console.log(error));
  }

  getBranches(): void {
    this.dataService
      .getDatas(this.branchesUrl)
      .subscribe((objects: Response) => {
        this.branches = objects.json().objects;
      }, err => console.log(err));
  }

  getDepartments(): void {
    this.dataService
      .getDatas(this.departmentsUrl)
      .subscribe(objects => this.departments = objects.json().objects, err => console.log(err));
  }

  getSubDepartments(): void {
    this.dataService
      .getDatas(this.subDepartmentsUrl)
      .subscribe((objects: Response) => this.subDepartments = objects.json().objects, err => console.log(err));
  }

  getGrades(): void {
    this.dataService
      .getDatas(this.gradesUrl)
      .subscribe((objects: Response) => this.grades = objects.json().objects, err => console.log(err));
  }

  getModes(): void {
    this.dataService
      .getDatas(this.modesUrl)
      .subscribe((objects: Response) => this.modes = objects.json().objects, err => console.log(err));
  }

  getTypes(): void {
    this.dataService
      .getDatas(this.typesUrl)
      .subscribe((objects: Response) => this.types = objects.json().objects, err => console.log(err));
  }

  getStatuses(): void {
    console.log(this.statusesUrl);
    this.dataService
      .getDatas(this.statusesUrl)
      .subscribe((objects: Response) => this.statuses = objects.json().objects, err => console.log(err));
  }

  getDesignations(): void {
    this.dataService
      .getDatas(this.designationsUrl)
      .subscribe((objects: Response) => this.designations = objects.json().objects, err => console.log(err));
  }

  getRegisteredUsers(): void {
    this.dataService
      .getDatas(this.registeredUsersUrl)
      .subscribe((objects: Response) => {
        this.registeredUsers = objects.json().objects;
      }, err => console.log(err));
  }


  ngOnInit() {
    this.server = this.commonService.getServer();
    this.branchesUrl = this.server + 'branch';
    this.departmentsUrl = this.server + 'department';
    this.subDepartmentsUrl = this.server + 'sub_department';
    this.gradesUrl = this.server + 'grade';
    this.modesUrl = this.server + 'mode';
    this.typesUrl = this.server + 'type';
    this.statusesUrl = this.server + 'status';
    this.designationsUrl = this.server + 'designation';
    this.registeredUsersUrl = this.server + 'user';
    this.saveEmployeesUrl = this.server + 'employee';
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

  ngAfterViewInit() {
    console.log(jQuery(".date-picker"));
    jQuery(".date-picker").nepaliDatePicker();
  }

}
