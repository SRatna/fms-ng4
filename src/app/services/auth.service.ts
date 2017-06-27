import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {
    constructor(private router: Router) {}
    isLoggedIn = false;

    login(): void{
         this.router.navigate(["/fms"]);
         this.isLoggedIn = true;

    }


}