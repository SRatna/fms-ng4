import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Employee} from '../../classes/employee';
import {CommonService} from '../../../../services/common.service';
import {DataService} from '../../../../services/data.service';
import { Response } from '@angular/http';
import {FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as _ from 'underscore';
//import * as districts from '../../../../services/district.json';
declare const jQuery: any;

@Component({selector: 'app-new-employee', templateUrl: './new-employee.component.html', styleUrls: ['./new-employee.component.css']})
export class NewEmployeeComponent implements OnInit,
AfterViewInit {
  myform: FormGroup;
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
  employeesUrl: string;
  unregisteredUser: any;
  employeeId: any;
  edit = false;
  districts: any;
  zones:any;


  constructor(private commonService: CommonService,
    private dataService: DataService,
    route: ActivatedRoute,
    private router: Router,
    private alertFlash: FlashMessagesService
  ) {
    this.employeeId = route.snapshot.params['id'];
    this.edit = this.employeeId ? true : false;
    let employee = this.edit ? this.dataService.getDataById(commonService.getServer() + 'employee', this.employeeId).subscribe((response: Response) => {
      this.employee = _.omit(response.json(), 'branch', 'designation', 'department', 'sub-department', 'grade', 'type', 'mode', 'status', 'user');
    },error=>console.log(error)) : '';
  }

  registerEmployee(): void {
    this.edit ? this
      .dataService
      .updateData(this.employeesUrl, this.employeeId, this.employee)
      .subscribe((response: Response) => {
        this.myform.reset();
        this.router.navigate(['/fms/employees']);
        this.edit = false;
    }):
    this
      .dataService
      .saveData(this.employeesUrl, this.employee)
        .subscribe(obj => {
        this.alertFlash.show("Employee Added !!", { cssClass: 'alert-success', timeout: 3000 });
        this
          .myform
          .reset();
        this.getUnregisteredUser();
      }, error => console.log(error));
  }

  getUnregisteredUser() {
    this
      .dataService
      .getDatas(this.registeredUsersUrl)
      .subscribe((objects: Response) => {
        this.unregisteredUser = objects
          .json()
          .objects;
      });
  }




  getBranches(): void {
    this
      .dataService
      .getDatas(this.branchesUrl)
      .subscribe((objects: Response) => {
        this.branches = objects
          .json()
          .objects;
      }, err => console.log(err));
  }

  getDepartments(): void {
    this
      .dataService
      .getDatas(this.departmentsUrl)
      .subscribe(objects => this.departments = objects.json().objects, err => console.log(err));
  }

  getSubDepartments(): void {
    this
      .dataService
      .getDatas(this.subDepartmentsUrl)
      .subscribe((objects: Response) => this.subDepartments = objects.json().objects, err => console.log(err));
  }

  getGrades(): void {
    this
      .dataService
      .getDatas(this.gradesUrl)
      .subscribe((objects: Response) => this.grades = objects.json().objects, err => console.log(err));
  }

  getModes(): void {
    this
      .dataService
      .getDatas(this.modesUrl)
      .subscribe((objects: Response) => this.modes = objects.json().objects, err => console.log(err));
  }

  getTypes(): void {
    this
      .dataService
      .getDatas(this.typesUrl)
      .subscribe((objects: Response) => this.types = objects.json().objects, err => console.log(err));
  }

  getStatuses(): void {
    console.log(this.statusesUrl);
    this
      .dataService
      .getDatas(this.statusesUrl)
      .subscribe((objects: Response) => this.statuses = objects.json().objects, err => console.log(err));
  }

  getDesignations(): void {
    this
      .dataService
      .getDatas(this.designationsUrl)
      .subscribe((objects: Response) => this.designations = objects.json().objects, err => console.log(err));
  }

  ngOnInit() {

    this.myform = new FormGroup({
      username: new FormControl(''),
      first_name: new FormControl(''),
      middle_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      branch_id: new FormControl(''),
      joined_e_date: new FormControl(''),
      joined_n_date: new FormControl(''),
      dob_e: new FormControl(''),
      dob_n: new FormControl(''),
      citizenship_no: new FormControl(''),
      mobile_number: new FormControl(''),
      t_country: new FormControl(''),
      t_address: new FormControl(''),
      t_street: new FormControl(''),
      t_zone: new FormControl(''),
      t_district: new FormControl(''),
      p_country: new FormControl(''),
      p_address: new FormControl(''),
      p_street: new FormControl(''),
      p_zone: new FormControl(''),
      p_district: new FormControl(''),
      user_id: new FormControl(''),
      department_id: new FormControl(''),
      sub_department_id: new FormControl(''),
      designation_id: new FormControl(''),
      mode_id: new FormControl(''),
      status_id: new FormControl(''),
      grade_id: new FormControl(''),
      type_id: new FormControl(''),
      gender: new FormControl('')
    });

    this.server = this
      .commonService
      .getServer();
    this.branchesUrl = this.server + 'branch';
    this.departmentsUrl = this.server + 'department';
    this.subDepartmentsUrl = this.server + 'sub_department';
    this.gradesUrl = this.server + 'grade';
    this.modesUrl = this.server + 'mode';
    this.typesUrl = this.server + 'type';
    this.statusesUrl = this.server + 'status';
    this.designationsUrl = this.server + 'designation';
    this.registeredUsersUrl = this.server + 'user';
    this.employeesUrl = this.server + 'employee';
    this.getStatuses();
    this.getBranches();
    this.getGrades();
    this.getDesignations();
    this.getDepartments();
    this.getSubDepartments();
    this.getTypes();
    this.getModes();
    this.getUnregisteredUser();
    this.districts = this.commonService.district;
    this.zones = this.commonService.zone;
    console.log(this.zones);


  }

  ngAfterViewInit() {}

}
