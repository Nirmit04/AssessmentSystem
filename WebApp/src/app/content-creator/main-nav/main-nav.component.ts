import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';

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
	}
	logout() {
		localStorage.clear();
		this.authService.signOut();
	}
}
