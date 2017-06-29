import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from '../classes/login';
import { AuthService } from '../../../services/auth.service';
@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, AfterViewInit {
    constructor(private authService: AuthService) { }
    myForm: FormGroup;

    login = new Login();

    onSubmit(): void{
        this.authService.login(this.login);
    }
    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(''),
            password: new FormControl('')
        });

    }
    ngAfterViewInit() {
        
    }
 };