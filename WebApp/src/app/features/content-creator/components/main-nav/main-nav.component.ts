import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { ContentCreatorService } from '../../services/content-creator-service.service';
import { StorageService } from '../../../../services/storage.service';

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
		private router: Router,
		private service: ContentCreatorService,
		private storageService: StorageService
	) { }

	public currentRole: string;
	private showSpinnner: boolean = true;

	ngOnInit(): void {
		this.currentRole = this.storageService.getStorage('currentRole');
		if (this.storageService.getStorage('id') === null) {
			this.router.navigate(['/login']);
		}
		const subscription = this.authService.authState.subscribe((user) => {
			if (user === null) {
				this.storageService.clearStorage();
				this.router.navigate(['/login']);
			}
		});
		subscription.unsubscribe();
	}

	public roleMatch(allowedRoles): boolean {
		let isMatch = false;
		const userRoles: string = this.storageService.getStorage('role');
		allowedRoles.forEach((element) => {
			if (userRoles.indexOf(element) > -1) {
				isMatch = true;
				return false;
			}
		});
		return isMatch;
	}

	public currentRoleIs(role: string): void {
		this.storageService.setStorage('currentRole', role);
		this.router.navigate([role]);
	}

	public setQuestionType(type: string): void {
		this.service.questionType = type;
		this.router.navigate(['/cc-dash/create-question']);
	}

	public logout(): void {
		this.storageService.clearStorage();
		this.authService.signOut();
	}
}
