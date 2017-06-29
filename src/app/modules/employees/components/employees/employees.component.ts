import {AfterViewInit, Component, OnInit} from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { DataService } from '../../../../services/data.service';
import { Response } from '@angular/http';
declare const $: any;
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  // employee = new Employee();
  employees: any[] = [];
  url: string;
  totalEntries: number;
  totalPages: number;
  currentPage: number;
  pagesList: number[] = [];
  queryTerm: string;
  resultsPerPage = 10;
  constructor(private commonService: CommonService, private dataService: DataService) { }

  getEmployees() {
    this.dataService
      .getDatas(this.url + '?results_per_page=' + this.resultsPerPage)
      .subscribe((response: Response) => {
        this.pagesList = [];
        this.employees = response.json().objects;
        this.totalEntries = response.json().num_results;
        this.currentPage = response.json().page;
        this.totalPages = response.json().total_pages;
        // create page list array
        for (let i = 1; i <= this.totalPages; i++) {
          this.pagesList.push(i);
        }
    });
  }

  loadNewPage(pageNo) {
    this.dataService
      .getDatas(this.url + '?page=' + pageNo + '&results_per_page=' + this.resultsPerPage)
      .subscribe((response: Response) => {
        this.employees = response.json().objects;
        this.currentPage = response.json().page;
      });
  }

  searchEmployee() {
    const query = {"filters": [{"name": "username", "op": "like", "val": "%" + this.queryTerm + "%"}]};
    this.dataService
      .getDatas(this.url + '?q=' + JSON.stringify(query))
      .subscribe((response: Response) => {
        this.pagesList = [];
        this.employees = response.json().objects;
        this.totalEntries = response.json().num_results;
        this.currentPage = response.json().page;
        this.totalPages = response.json().total_pages;
        // create page list array
        for (let i = 1; i <= this.totalPages; i++) {
          this.pagesList.push(i);
        }
    });
  }

  ngOnInit() {
    this.url = this.commonService.getServer() + 'employee';
    this.getEmployees();
  }


}
