import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';


@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    constructor(private authService: AuthService) { }
    logout() {
        this.authService.logout();
}
}
