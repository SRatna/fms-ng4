import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { CommonService } from '../../../../services/common.service';
import { Response } from '@angular/http';
@Component({
    templateUrl: './employee-attendence.component.html',
})

export class EmployeeAttendence implements OnInit{

    attendence: any;
    attendenceUrl: string;
    users: any;
    user_id: number;
    from: any;
    to: any;

    constructor(private dataService:DataService, private commonService:CommonService) {}

    ngOnInit() {
        this.attendenceUrl = this.commonService.getServer() + 'attendance';
        this.getRegisteredUser();
    }

    getRegisteredUser() {
        var url = this.commonService.getServer() + 'user';
        this.dataService.getDatas(url).subscribe((response: Response) => {
            this.users = response.json().objects;

        })
    }
    getUserAttendence() {
        console.log(this.user_id,this.from);
        this.dataService.getDataByDateRange(this.attendenceUrl, { user_id: this.user_id, start_date: this.from, end_date: this.to }).subscribe((response: Response) => {
            this.attendence = response.json();
        },
        error=>console.log(error))
    }


}