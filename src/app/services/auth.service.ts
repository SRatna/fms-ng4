import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {
    constructor(private router: Router) {}
    isLoggedIn = false;

    login(): void{
        console.log('sdfsdfs');
         this.router.navigate(["/layouts"]);
         this.isLoggedIn = true;

    }


}