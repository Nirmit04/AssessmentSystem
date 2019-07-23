import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { ContentCreatorServiceService } from '../../services/content-creator-service.service';
import { StorageService } from '../../../../services/storage.service';

@Component({
	selector: 'app-main-nav',
	templateUrl: './main-nav.component.html',
	styleUrls: [ './main-nav.component.css' ]
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
		private storageService: StorageService
	) {}
	Val: string[];
	showSpinnner: boolean = true;

	ngOnInit() {
		$(document).on('click', 'ul.nav li', function() {
			$(this).addClass('active').siblings().removeClass('active');
		});
		this.cRole = this.storageService.getStorage('currentRole');
		if (this.storageService.getStorage('id') === null) {
			this.router.navigate([ '/login' ]);
		}
		this.authService.authState.subscribe((user) => {
			if (user != null) {
			} else {
				this.storageService.clearStorage();
				this.router.navigate([ '/login' ]);
			}
		});
	}

	roleMatch(allowedRoles): boolean {
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

	aab(role: string) {
		this.storageService.setStorage('currentRole', role);
		this.router.navigate([ role ]);
	}

	logout() {
		this.storageService.clearStorage();
		this.authService.signOut();
	}

	setQuestionType(type: string) {
		this.service.QuestionType = type;
		this.router.navigate([ '/cc-dash/create-question' ]);
	}
}
