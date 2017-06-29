import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (localStorage.getItem('currentUser') == null && state.url != '/login' ) {
            this.router.navigate(['/login']);
            return false;
        } else if(state.url == '/login' && localStorage.getItem('currentUser') != null){
            this.router.navigate(['/fms']);
            return false;
        }
        else if (localStorage.getItem('currentUser') == null && state.url=='/login') {
            return true;
        }
        return true;
    }

}