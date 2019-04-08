import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { allResolved } from 'q';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
	constructor(private router: Router) { }
	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (localStorage.getItem('uid') != null) {
			const roles = next.data['roles'] as Array<string>;
			if (roles) {
				var match = this.roleMatch(roles);
				if (match) return true;
				else {
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

	roleMatch(allowedRoles): boolean {
		console.log(allowedRoles);
		var isMatch = false;
		var userRoles: string = localStorage.getItem('role');
		allowedRoles.forEach(element => {
			if (userRoles.indexOf(element) > -1) {
				isMatch = true;
				//return false;
			}
		});
		return isMatch;
	}
}
