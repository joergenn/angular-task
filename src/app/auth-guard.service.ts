import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate() {
        if (localStorage.getItem('auth') != 'true') {
         this.router.navigate(['login']);
         console.log('Unlogged');
         
        }
        return true;
    }
    constructor(private router: Router) { }
}