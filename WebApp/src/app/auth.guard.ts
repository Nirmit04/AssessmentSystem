import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { allResolved } from 'q';
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
	constructor(private router: Router) { }
	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (localStorage.getItem('uid') != null) {
<<<<<<< HEAD
			return true;
=======
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
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
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
<<<<<<< HEAD
=======

	roleMatch(allowedRoles): boolean {
		var isMatch = false;
		var userRoles: string = localStorage.getItem('role');
		allowedRoles.forEach(element => {
			if (userRoles.indexOf(element) > -1) {
				isMatch = true;
			}
		});
		return isMatch;
	}
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
}
