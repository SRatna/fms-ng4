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
import { Observable } from 'rxjs/Rx';
import * as _ from 'underscore';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  // employee = new Employee();
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
  private employeesUrl = 'http://localhost/advanced/api/web/v1/employees';

  constructor(private commonService: CommonService) { }

  getEmployees() {
    Observable.forkJoin(
      this.commonService.getObjects(this.branchesUrl),
      this.commonService.getObjects(this.departmentsUrl),
      this.commonService.getObjects(this.subDepartmentsUrl),
      this.commonService.getObjects(this.gradesUrl),
      this.commonService.getObjects(this.modesUrl),
      this.commonService.getObjects(this.typesUrl),
      this.commonService.getObjects(this.statusesUrl),
      this.commonService.getObjects(this.designationsUrl),
      this.commonService.getObjects(this.registeredUsersUrl),
    ).subscribe(objects => {
        this.branches = objects[0];
        this.departments = objects[1];
        this.subDepartments = objects[2];
        this.grades = objects[3];
        this.modes = objects[4];
        this.types = objects[5];
        this.statuses = objects[6];
        this.designations = objects[7];
        this.registeredUsers = objects[8];
    }, err => console.log(err), () => {
        this.commonService.getObjects(this.employeesUrl)
          .subscribe(employees => {
            for (const obj of employees) {
              const foundBranch = _.findWhere(this.branches, {id: obj.branch_id});
              const foundDepartment = _.findWhere(this.departments, {id: obj.department_id});
              const foundSubDepartment = _.findWhere(this.subDepartments, {id: obj.sub_department_id});
              const foundGrade = _.findWhere(this.grades, {id: obj.grade_id});
              const foundType = _.findWhere(this.types, {id: obj.type_id});
              const foundDesignation = _.findWhere(this.designations, {id: obj.designation_id});
              const foundMode = _.findWhere(this.modes, {id: obj.mode_id});
              const foundStatus = _.findWhere(this.statuses, {id: obj.status_id});
              const foundRegisteredUser = _.findWhere(this.registeredUsers, {id: obj.reg_id});
              obj.branch = foundBranch.name;
              obj.department = foundDepartment.name;
              obj.sub_department = foundSubDepartment.name;
              obj.grade = foundGrade.name;
              obj.type = foundType.name;
              obj.designation = foundDesignation.name;
              obj.mode = foundMode.name;
              obj.status = foundStatus.name;
              obj.reg_username = foundRegisteredUser.username;
              this.employees.push(obj);
            }
          }, err => console.log(err), () => console.log(this.employees));
    });
  }

  ngOnInit() {
    this.getEmployees();
  }

}
