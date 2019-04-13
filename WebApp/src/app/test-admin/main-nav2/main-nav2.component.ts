import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router'

@Component({
	selector: 'app-main-nav2',
	templateUrl: './main-nav2.component.html',
	styleUrls: ['./main-nav2.component.css']
})
export class MainNav2Component {
	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(map((result) => result.matches));
	cRole = "";
	constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService,
		private router: Router) { }
	ngOnInit() {
		this.cRole = localStorage.getItem('currentRole');
		console.log(this.cRole);
		this.authService.authState.subscribe((user) => {
			if (user != null) {
			} else {
				localStorage.clear();
				this.router.navigate(['/login']);
			}
		});
	}
	roleMatch(allowedRoles): boolean {
		var isMatch = false;
		var userRoles: string = localStorage.getItem('role');
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

}
