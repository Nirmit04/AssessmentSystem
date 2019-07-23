import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
	constructor(private router: Router, private storageService: StorageService) { }
	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this.storageService.getStorage('uid') != null) {
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
		this.storageService.clearStorage();
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
		var isMatch = false;
		var userRoles: string = this.storageService.getStorage('role');
		allowedRoles.forEach(element => {
			if (userRoles.indexOf(element) > -1) {
				isMatch = true;
			}
		});
		return isMatch;
	}
}
