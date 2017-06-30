import {Component, OnInit} from '@angular/core';
import {Branch} from '../classes/branch';
import {Department} from '../classes/department';
import {SubDepartment} from '../classes/sub-department';
import {Status} from '../classes/status';
import {Designation} from '../classes/designation';
import {Mode} from '../classes/mode';
import {Grade} from '../classes/grade';
import {Type} from '../classes/type';
import {CommonService} from '../../../services/common.service';
import {DataService} from '../../../services/data.service';
import * as _ from 'underscore';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import {isUndefined} from "util";
import {Response} from '@angular/http';

@Component({templateUrl: './entities.component.html', styleUrls: ['./entities.component.css']})
export class EntitiesComponent implements OnInit {

  myform: FormGroup;
  duplicityErrorMsg: string;
  newEntities = {
    department: new Department(),
    branch: new Branch(),
    designation: new Designation(),
    grade: new Grade(),
    mode: new Mode(),
    status: new Status(),
    sub_department: new SubDepartment(),
    type: new Type()

  };
  title = {
    department: 'Department',
    branch: 'Branch',
    designation: 'Designation',
    grade: 'Grade',
    mode: 'Mode',
    status: 'Status',
    sub_department: 'Sub Department',
    type: 'Type'
  };

  entityTitle: string;
  entities: any;
  entity = 'branch';
  editform= false;
  entityUrl: string;
  entityModel: any;

  constructor(private commonService: CommonService, private dataService: DataService) {}

  save(): void {
    console.log(this.editform);
    this.editform ? this.dataService
      .updateData(this.entityUrl, this.entityModel.id, this.entityModel)
      .subscribe((response: Response) => {
        this.getEntities();
        this
          .myform
          .reset();
      }) :
    this
      .dataService
      .saveData(this.entityUrl, this.entityModel)
        .subscribe((response: Response) => {
        console.log(response)
        this
          .getEntities();
        this
          .myform
          .reset();
      });
  }

  clicked(ent) {
    this.entity = ent;
    this.initiateModel();
    this.getEntities();
  }


  delete($event) {
    $event.preventDefault();
    this.dataService.deleteData(this.entityUrl, $event.target.id).subscribe((response: Response) => {
      this.getEntities();
    }, error => {
      console.log(error);
    });
  }

  edit($event) {
    $event.preventDefault();
    this.dataService.updateData(this.entityUrl, $event.target.id,this.entity).subscribe((response: Response) => {
      this.getEntities();
    }, error => console.log(error));
  }

  editEntity($event) {
    $event.preventDefault();
    this.entityModel = _.findWhere(this.entities, { id: parseInt($event.target.id) });
    this.editform = true;
  }
  getEntities(): void {
    this
      .dataService
      .getDatas(this.entityUrl)
      .subscribe((response: Response) => {
        this.entities = response
          .json()
          .objects;
      });
  }

  initiateModel() {
    this.entityModel = this.newEntities[this.entity];
    this.entityUrl = this
      .commonService
      .getServer() + this.entity;
    this.entityTitle = this.title[this.entity];
  }

  ngOnInit() {
    this.myform = new FormGroup({name: new FormControl('',[Validators.required,Validators.minLength(3)])});
    this.initiateModel();
    this.getEntities();

  }

}
