import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { addAllToArray } from '@angular/core/src/render3/util';
import { stringify } from '@angular/core/src/util';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service';
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165

@Component({
	selector: 'app-main-nav',
	templateUrl: './main-nav.component.html',
<<<<<<< HEAD
	styleUrls: ['./main-nav.component.css']
=======
	styleUrls: [ './main-nav.component.css' ]
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
})
export class MainNavComponent {
	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(map((result) => result.matches));
<<<<<<< HEAD
=======
	cRole: string;
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165

	constructor(
		private breakpointObserver: BreakpointObserver,
		private authService: AuthService,
<<<<<<< HEAD
		private router: Router
	) { }
	Val: string[];
	ngOnInit() {
		if (localStorage.getItem('id') === null) {
			this.router.navigate(['/login']);
=======
		private router: Router,
		private service: ContentCreatorServiceService
	) {}
	Val: string[];
	showSpinnner: boolean = true;

	ngOnInit() {
		$(document).on('click', 'ul.nav li', function() {
			$(this).addClass('active').siblings().removeClass('active');
		});
		this.cRole = localStorage.getItem('currentRole');
		if (localStorage.getItem('id') === null) {
			this.router.navigate([ '/login' ]);
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
		}
		this.authService.authState.subscribe((user) => {
			if (user != null) {
			} else {
				localStorage.clear();
<<<<<<< HEAD
				this.router.navigate(['/login']);
			}
		});
	}
=======
				this.router.navigate([ '/login' ]);
			}
		});
	}

	roleMatch(allowedRoles): boolean {
		var isMatch = false;
		var userRoles: string = localStorage.getItem('role');
		allowedRoles.forEach((element) => {
			if (userRoles.indexOf(element) > -1) {
				isMatch = true;
				return false;
			}
		});
		return isMatch;
	}

	aab(role: string) {
		localStorage.setItem('currentRole', role);
		this.router.navigate([ role ]);
	}

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
	logout() {
		localStorage.clear();
		this.authService.signOut();
	}

<<<<<<< HEAD
=======
	setQuestionType(type: string) {
		this.service.QuestionType = type;
		this.router.navigate([ '/cc-dash/create-question' ]);
	}
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
}
