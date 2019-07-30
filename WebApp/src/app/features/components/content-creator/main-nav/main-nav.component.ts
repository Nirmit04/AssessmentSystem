import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { ContentCreatorServiceService } from '../../../services/content-creator-service.service';

@Component({
	selector: 'app-main-nav',
	templateUrl: './main-nav.component.html',
	styleUrls: [ './main-nav.component.scss' ]
})
export class MainNavComponent implements OnInit, OnDestroy {
	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(map((result) => result.matches));

	constructor(
		private breakpointObserver: BreakpointObserver,
		private authService: AuthService,
		private router: Router,
		private service: ContentCreatorServiceService
	) {}
	public currentRole: string;
	public showSpinnner: boolean = true;
	subscription: Subscription;

	ngOnInit() {
		$(document).on('click', 'ul.nav li', function() {
			$(this).addClass('active').siblings().removeClass('active');
		});
		this.currentRole = localStorage.getItem('currentRole');
		if (localStorage.getItem('id') === null) {
			this.router.navigate([ '/login' ]);
		}
		this.subscription = this.authService.authState.subscribe((user) => {
			if (user != null) {
			} else {
				localStorage.clear();
				this.router.navigate([ '/login' ]);
			}
		});
	}

	public roleMatch(allowedRoles): boolean {
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

	public currentRoleIs(role: string) {
		localStorage.setItem('currentRole', role);
		this.router.navigate([ role ]);
	}

	public logout() {
		localStorage.clear();
		this.authService.signOut();
	}

	public setQuestionType(type: string) {
		this.service.QuestionType = type;
		this.router.navigate([ '/cc-dash/create-question' ]);
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
