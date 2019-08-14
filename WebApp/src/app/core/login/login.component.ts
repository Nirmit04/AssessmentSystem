import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Router, ActivatedRoute } from '@angular/router';
import {StorageService} from '../../services/storage.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	user: SocialUser;
	returnURL: string;
	constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute,private storageService:StorageService) {}

	ngOnInit() {
		this.storageService.setStorage('key', this.route.snapshot.queryParamMap.get('take-quiz'));
		this.storageService.setStorage('key1', this.route.snapshot.queryParamMap.get('schedule-id'));
		this.storageService.setStorage('time', this.route.snapshot.queryParamMap.get('time'));
		this.authService.authState.subscribe((user) => {
			this.user = user;
			if (user != null) {
                console.log(user);
				this.storageService.setStorage('token', this.user.idToken);
				this.storageService.setStorage('email', this.user.email);
				this.storageService.setStorage('firstname', this.user.firstName);
				this.storageService.setStorage('lastname', this.user.lastName);
				this.storageService.setStorage('id', this.user.id);
				this.storageService.setStorage('imgurl', this.user.photoUrl);
				this.storageService.setStorage('provider', this.user.provider);
				this.router.navigate([ '/home' ]);
			} else {
				this.storageService.clearStorage();
			}
		});
	}

	signInWithGoogle(): void {
		this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
	}

	signOut(): void {
		this.authService.signOut();
	}
}
