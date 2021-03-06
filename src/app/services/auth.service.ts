import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { CommonService } from '../services/common.service';
import { DataService } from '../services/data.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Injectable()

export class AuthService {
    isLoggedIn = false;
    server: string;
    constructor(private dataService: DataService,
        private router: Router,
        private http: Http,
        private commonService: CommonService,
        private alertMessage: FlashMessagesService
    ) {
        this.server = commonService.getServer();
        this.isLoggedIn = localStorage.getItem('currentUser') == null ? false : true;
    }

    loginUser(data:any){
       return this
            .http
            .post(this.server + 'login', data);
    }

    login(data: any){
        this.loginUser(data).subscribe((response: Response) => {
            console.log(response);
            let user = response.json();
            if (user && user.token) {
                localStorage.setItem('currentUser', user.token);
                this.router.navigate(['/fms']);
            }
             else {
                this.alertMessage.show(response.json().error, { cssClass: 'alert-danger', timeout: 3000 });
                // console.log(response.json());
             }
        },error=> {
            console.log(error.json());
        })

    }

    logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }




}