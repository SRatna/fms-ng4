import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { CommonService } from '../../../../services/common.service';
import { Response } from '@angular/http';
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
        },
        error => console.log(error));
    }


}
