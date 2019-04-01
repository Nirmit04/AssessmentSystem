import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { addAllToArray } from '@angular/core/src/render3/util';
import { stringify } from '@angular/core/src/util';

@Component({
	selector: 'app-main-nav',
	templateUrl: './main-nav.component.html',
	styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(map((result) => result.matches));

	constructor(
		private breakpointObserver: BreakpointObserver,
		private authService: AuthService,
		private router: Router
	) { }
	Val: string[];
	showSpinnner: boolean = true;
	// roles = '';
	// rolesArray: string[];
	// t = 0;
	ngOnInit() {
		if (localStorage.getItem('id') === null) {
			this.router.navigate(['/login']);
		}
		this.authService.authState.subscribe((user) => {
			if (user != null) {
			} else {
				localStorage.clear();
				this.router.navigate(['/login']);
			}
		});
		// this.roles = localStorage.getItem('role');
		// this.roles += ',';
		// this.role();
		//	console.log(this.roleMatch(['Employee']));
	}
	// role() {
	// 	this.rolesArray = [];
	// 	let a = "";
	// 	for (let i = 0; i < this.roles.length; i++) {
	// 		if (this.roles.charAt(i) != ',') {
	// 			a += this.roles.charAt(i)
	// 		} else {
	// 			this.rolesArray[this.t] = a;
	// 			this.t++;
	// 			a = "";
	// 		}
	// 	}
	// 	// console.log(this.rolesArray);
	// }
	roleMatch(allowedRoles): boolean {
		var isMatch = false;
		//	console.log(localStorage.getItem('role'));
		var userRoles: string = localStorage.getItem('role');
		//	console.log(userRoles);
		allowedRoles.forEach(element => {
			//	console.log(userRoles.indexOf(element));
			if (userRoles.indexOf(element) > -1) {
				isMatch = true;
				return false;
			}
		});
		return isMatch;

	}
	aab(role: string) {
		this.router.navigate([role]);
	}
	logout() {
		localStorage.clear();
		this.authService.signOut();
	}

}
