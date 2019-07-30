import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
	selector: 'app-mainnav4',
	templateUrl: './mainnav4.component.html',
	styleUrls: [ './mainnav4.component.scss' ]
})
export class Mainnav4Component {
	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(map((result) => result.matches));
	public currentRole: string;

	constructor(
		private breakpointObserver: BreakpointObserver,
		private authService: AuthService,
		private router: Router
	) {}

	ngOnInit() {
		this.currentRole = localStorage.getItem('currentRole');
		const subscription = this.authService.authState.subscribe((user) => {
			if (user != null) {
			} else {
				localStorage.clear();
				this.router.navigate([ '/login' ]);
			}
		});
		subscription.unsubscribe();
	}

	roleMatch(allowedRoles): boolean {
		let isMatch = false;
		const userRoles: string = localStorage.getItem('role');
		allowedRoles.forEach((element) => {
			if (userRoles.indexOf(element) > -1) {
				isMatch = true;
				return false;
			}
		});
		return isMatch;
	}

	public currentRoleIs(role: string) {
		localStorage.setItem('currentRole', role);
		this.router.navigate([ role ]);
	}

	public logout() {
		localStorage.clear();
		this.authService.signOut();
	}
}
