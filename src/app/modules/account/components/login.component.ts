import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from '../classes/login';
import { AuthService } from '../../../services/auth.service';
@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {
    constructor(private authService: AuthService) { }

    login = new Login();

    onSubmit(): void{
        this.authService.login();
    }
 };