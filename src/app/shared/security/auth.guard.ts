import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private authSvc: AuthService, private router: Router) {}

    canActivate(route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot):Observable<boolean> {

            this.authSvc.authInfo$
                .map(authInfo => authInfo.isLoggedIn())
                .take(1)
                .do(allowed => {
                    if(!allowed) {
                        this.router.navigate(['/login'])
                    }
                });
            

            return undefined;
        }
}