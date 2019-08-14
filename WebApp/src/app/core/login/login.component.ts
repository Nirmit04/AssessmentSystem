import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from '../../services/storage.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	/* The main page of the Assessment System where the user performs Google SSO and we recapture user details from the google api */
	public user: SocialUser;
	constructor(private authService: AuthService,
		private router: Router,
		private route: ActivatedRoute,
		private storageService: StorageService) { }

	public ngOnInit(): void {
		/* if the user comes to the system by clicking on the quiz link, then quiz details are picked from the url and stored */
		this.storageService.setStorage('key', this.route.snapshot.queryParamMap.get('take-quiz'));
		this.storageService.setStorage('key1', this.route.snapshot.queryParamMap.get('schedule-id'));
		this.storageService.setStorage('time', this.route.snapshot.queryParamMap.get('time'));
		this.authService.authState.subscribe((user) => {
			/* hitting the google api and validating the user */
			this.user = user;
			if (user !== null) {
				/* if user is successfully vaidated from the google api, then his details are retrieved and stored in the storage service */
				this.storageService.setStorage('token', this.user.idToken);
				this.storageService.setStorage('email', this.user.email);
				this.storageService.setStorage('firstname', this.user.firstName);
				this.storageService.setStorage('lastname', this.user.lastName);
				this.storageService.setStorage('id', this.user.id);
				this.storageService.setStorage('imgurl', this.user.photoUrl);
				this.storageService.setStorage('provider', this.user.provider);
				this.router.navigate(['/home']); // redirects the user to the home page, where he is registered onto the system and then redirected to his role dashboard
			} else {
				this.storageService.clearStorage();
			}
		});
	}

	public signInWithGoogle(): void {
		/* Google SSO is hit by the user */
		this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
	}

	public signOut(): void {
		/* the user sins out of the system */
		this.authService.signOut();
	}
}
