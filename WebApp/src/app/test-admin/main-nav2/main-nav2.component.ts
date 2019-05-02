import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'angularx-social-login';
<<<<<<< HEAD
import { Router } from '@angular/router'
=======
import { Router } from '@angular/router';
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165

@Component({
	selector: 'app-main-nav2',
	templateUrl: './main-nav2.component.html',
	styleUrls: ['./main-nav2.component.css']
})
export class MainNav2Component {
	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(map((result) => result.matches));
<<<<<<< HEAD

	constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService,
		private router: Router) { }
	ngOnInit() {
		this.authService.authState.subscribe((user) => {
			if (user != null) {
				//	console.log(user);
=======
	cRole = '';
	constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private router: Router) { }
	ngOnInit() {
		this.cRole = localStorage.getItem('currentRole');
		this.authService.authState.subscribe((user) => {
			if (user != null) {
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
			} else {
				localStorage.clear();
				this.router.navigate(['/login']);
			}
		});
	}
<<<<<<< HEAD
	logout() {
		this.authService.signOut();
	}
=======
	roleMatch(allowedRoles): boolean {
		var isMatch = false;
		const userRoles: string = localStorage.getItem('role');
		allowedRoles.forEach(element => {
			if (userRoles.indexOf(element) > -1) {
				isMatch = true;
				return false;
			}
		});
		return isMatch;
	}

	aab(role: string) {
		localStorage.setItem('currentRole', role);
		this.router.navigate([role]);
	}

	logout() {
		this.authService.signOut();
	}

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
}
