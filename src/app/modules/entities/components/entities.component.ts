
import { Component, OnInit } from '@angular/core';
import { Branch } from '../../branches/classes/branch';
import { Department } from '../../departments/classes/department';
import { SubDepartment } from '../../sub-departments/classes/sub-department';
import { Status } from '../../statuses/classes/status';
import { Designation } from '../../designations/classes/designation';
import { Mode } from '../../modes/classes/mode';
import { Grade } from '../../grades/classes/grade';
import { Type } from '../../types/classes/type';
import { CommonService } from '../../../services/common.service';
import { DataService } from '../../../services/data.service';

import * as _ from 'underscore';
import { FormGroup } from '@angular/forms';
import { isUndefined } from "util";
import { Response } from '@angular/http';

@Component({
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent implements OnInit {

  duplicity: boolean;
  duplicityErrorMsg: string;
  newEntities = {
      department: new Department(),
      branch: new Branch(),
      designation: new Designation(),
      grade: new Grade(),
      mode: new Mode(),
      status: new Status(),
      subDepartment: new SubDepartment(),
      type: new Type()

  };
  title = {
      department: 'Department',
      branch: 'Branch',
      designation: 'Designation',
      grade: 'Grade',
      mode: 'Mode',
      status: 'Status',
      subDepartment: 'SubDepartment',
      type: 'Type'
 }


  entityTitle: string;
  entities: any;
  entity = 'branch';
  entityUrl: string;
  entityModel:object;



  constructor(private commonService: CommonService, private dataService: DataService) { }



  save(myForm: FormGroup): void {
    this.dataService.saveData(this.entityUrl,this.entityModel)
      .subscribe((response: Response) => {
        this.entities.push(response.json());
    })
  }

  clicked(ent) {
      console.log(ent);
      this.entity = ent;
      this.initiateModel();
      this.getEntities();
  }

//   deleteDepartment(department: Department): void {
//     if (confirm('Do you really want to delete?')) {
//       this.commonService.remove(department, this.departmentsUrl)
//         .subscribe(deletedDepartment => this.departments = this.departments.filter(d => d !== deletedDepartment), err => console.log(err));
//     }

//   }

  getEntities(): void {
    this.dataService
      .getDatas(this.entityUrl).subscribe((response: Response) => {
        this.entities = response.json().objects;
        });
  }


  initiateModel() {
      this.entityModel = this.newEntities[this.entity];
      this.entityUrl = this.commonService.getServer() + this.entity;
      this.entityTitle = this.title[this.entity];
  }

  ngOnInit() {
      this.initiateModel();
      this.getEntities();
  }

}

