import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { CommonService } from '../../../../services/common.service';
import { Response } from '@angular/http';
import * as _ from 'underscore';
@Component({
    templateUrl: './employee-attendence.component.html',
})

export class EmployeeAttendenceComponent implements OnInit {

    attendence: any[] = [];
    attendenceUrl: string;
    users: any;
    user_id: number;
    from: any;
    to: any;
    total_worked_time: any;
    holiday;
    holidaywork;
    absent;
    workingDay;
    workedDay;

    constructor(private dataService: DataService, private commonService: CommonService) {}

    ngOnInit() {
        this.attendenceUrl = this.commonService.getServer() + 'attendance';
        this.getRegisteredUser();
    }

    getRegisteredUser() {
        const url = this.commonService.getServer() + 'alluser';
        this.dataService.getDatas(url).subscribe((response: Response) => {
            this.users = response.json();

        });
    }
    getUserAttendence() {
        this.dataService.getDataByDateRange(this.attendenceUrl, { user_id: this.user_id, start_date: this.from, end_date: this.to })
          .subscribe((response: Response) => {
            const result = response.json();
            this.attendence = result[0]['attendance_records'];
            this.total_worked_time = result[0]['total_worked_time'];
            this.getTotalWorkingDay(this.attendence);
        },
        error => console.log(error));
    }

    getTotalWorkingDay(attendence) {
        let workingday = _.where(attendence, { day: "Working day" });
        this.getTotalHoliday(attendence, workingday.length);
        let absent =_.filter(workingday, obj => {
                return obj.worked_time=='0' && obj.remarks != 'Forgot to checkout'
        })

        this.absent = absent.length;
        this.workedDay = workingday.length - absent.length;
        this.workingDay = workingday.length;
       // let workedDay =
        //return workingday.length;

    }

    getTotalHoliday(attendence, workingday) {
        let holiday = _.where(attendence, { day: "Saturday" });
        let home = _.where(holiday, { worked_time: '0' });
        this.holidaywork = holiday.length - home.length;
        this.holiday = holiday.length;
    }


}
