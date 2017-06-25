import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Response } from '@angular/http';
import * as moment from 'moment';

@Component({
    templateUrl:'./dashboard.component.html'
})

export class DashboardComponent implements OnInit{
    attendence_record = {};
    date: string;
    constructor(private dataService: DataService) {
        this.date = moment().format('YYYY-MM-DD');
     }
    ngOnInit() {
        this.getAttendenceDetail();
    }

    getAttendenceDetail() {
        console.log(this.date);
         this.dataService.getData("http://192.168.1.124:9090/dashboard", { 'date': this.date })
            .subscribe((response: Response) => {
                this.attendence_record = response.json();
            },
            (error) => console.log(error));

    }


 }

