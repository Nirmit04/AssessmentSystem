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
	/* This class is used to setup the dashboard for the content-creator*/
	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(map((result) => result.matches));

	public currentRole: string;
	private showSpinnner: boolean;

	constructor(
		private breakpointObserver: BreakpointObserver,
		private authService: AuthService,
		private router: Router,
		private service: ContentCreatorService,
		private storageService: StorageService
	) {
		this.currentRole = '';
		this.showSpinnner = true;
	}

	public ngOnInit(): void {
		this.currentRole = this.storageService.getStorage('currentRole'); // picking up the current role from the storage service and setting it up in the role drop-down
		if (this.storageService.getStorage('id') === null) {
			/* if the session is over, then force the user to login again */
			this.router.navigate(['/login']);
		}
		this.authService.authState.subscribe((user) => {
			/* validating the user through the Google SSO */
			if (user === null) {
				this.storageService.clearStorage();
				this.router.navigate(['/login']);
			}
		});
	}

	public roleMatch(allowedRoles): boolean {
		/* displaying all those roles of the user that ha been assigned to it in the role drop-down */
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
		/* sets the active item in the role drop-down to the current role of the user, in this case, it is 'Content-Creator' */
		this.storageService.setStorage('currentRole', role);
		this.router.navigate([role]);
	}

	public setQuestionType(type: string): void {
		/* depending on whether the user clicked the 'Add Mock Questions' or 'Add Scheduled Questions', the question type is accordingly set */
		this.service.questionType = type;
		this.router.navigate(['/cc-dash/create-question']);
	}

	public logout(): void {
		/* logouts the user fromt he system */
		this.storageService.clearStorage();
		this.authService.signOut();
	}
}
