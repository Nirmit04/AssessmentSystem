import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { StorageService } from '../../../../services/storage.service';

@Component({
	selector: 'app-main-nav3',
	templateUrl: './main-nav3.component.html'
})
export class MainNav3Component {
	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(map((result) => result.matches));
	public currentRole: string;

	constructor(
		private breakpointObserver: BreakpointObserver,
		private authService: AuthService,
		private router: Router,
		private storageService: StorageService
	) {}

	public ngOnInit(): void {
		this.currentRole = this.storageService.getStorage('currentRole');
		this.authService.authState.subscribe((user) => {
			if (user === null) {
				this.storageService.clearStorage();
				this.router.navigate([ '/login' ]);
			}
		});
	}

	public roleMatch(allowedRoles: []): boolean {
		var isMatch = false;
		var userRoles: string = this.storageService.getStorage('role');
		allowedRoles.forEach((element) => {
			if (userRoles.indexOf(element) > -1) {
				isMatch = true;
				return false;
			}
		});
		return isMatch;
	}

	public changeRole(role: string): void {
		this.storageService.setStorage('currentRole', role);
		this.router.navigate([ role ]);
	}

	public logout(): void {
		this.storageService.clearStorage();
		this.authService.signOut();
	}
}
