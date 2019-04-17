import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { addAllToArray } from '@angular/core/src/render3/util';
import { stringify } from '@angular/core/src/util';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service';

@Component({
	selector: 'app-main-nav',
	templateUrl: './main-nav.component.html',
	styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(map((result) => result.matches));
	cRole: string;

	constructor(
		private breakpointObserver: BreakpointObserver,
		private authService: AuthService,
		private router: Router,
		private service: ContentCreatorServiceService,
	) { }
	Val: string[];
	showSpinnner: boolean = true;

	ngOnInit() {
		this.cRole = localStorage.getItem('currentRole');
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
		localStorage.clear();
		this.authService.signOut();
	}

	setQuestionType(type: string) {
		this.service.QuestionType = type;
		this.router.navigate(['/cc-dash/create-question'])
	}
}
