import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
	constructor(private router: Router) { }
	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (localStorage.getItem('uid') != null) {
			let roles = next.data["roles"];
			if (roles) {
				if (roles === localStorage.getItem('role')) {
					return true;
				}
				else {
					localStorage.setItem('errorCode', '403');
					this.router.navigate(['/http-error']);
					return false;
				}
			}
			else
				return true;
		}
		localStorage.clear();
		this.router.navigate(['/login']);
		return false;
	}
	canActivateChild(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return true;
	}
}
