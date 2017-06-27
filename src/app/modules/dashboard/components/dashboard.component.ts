import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Response } from '@angular/http';
import * as moment from 'moment';
import { CommonService} from '../../../services/common.service'
@Component({
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit{
    attendence_record = {};
    date: string;
    constructor(private dataService: DataService, private commonService: CommonService) {
        this.date = moment().format('YYYY-MM-DD');
     }
    ngOnInit() {
        this.getAttendenceDetail();
    }

    getAttendenceDetail() {
        console.log(this.date);
        let url = this.commonService.getServer()+'dashboard';
        this.dataService.getData(url, { 'date': this.date })
            .subscribe((response: Response) => {
                this.attendence_record = response.json();
            },
            (error) => console.log(error));

    }


 }

