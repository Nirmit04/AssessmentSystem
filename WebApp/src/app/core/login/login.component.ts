import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit, OnDestroy {
	user: SocialUser;
	returnURL: string;
	subscription: Subscription;
	constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
		localStorage.setItem('key', this.route.snapshot.queryParamMap.get('take-quiz'));
		localStorage.setItem('key1', this.route.snapshot.queryParamMap.get('schedule-id'));
		localStorage.setItem('time', this.route.snapshot.queryParamMap.get('time'));
		this.subscription = this.authService.authState.subscribe((user) => {
			this.user = user;
			if (user != null) {
				localStorage.setItem('token', this.user.idToken);
				localStorage.setItem('email', this.user.email);
				localStorage.setItem('firstname', this.user.firstName);
				localStorage.setItem('lastname', this.user.lastName);
				localStorage.setItem('id', this.user.id);
				localStorage.setItem('imgurl', this.user.photoUrl);
				localStorage.setItem('provider', this.user.provider);
				this.router.navigate([ '/home' ]);
			} else {
				localStorage.clear();
			}
		});
	}

	signInWithGoogle(): void {
		this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
	}

	signOut(): void {
		localStorage.clear();
		this.authService.signOut();
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
