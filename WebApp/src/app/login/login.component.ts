import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (user != null) {
        console.log(this.user);
        localStorage.setItem('token', this.user.idToken);
        localStorage.setItem('email', this.user.email);
        localStorage.setItem('firstname', this.user.firstName);
        localStorage.setItem('lastname', this.user.lastName);
        localStorage.setItem('id', this.user.id);
        localStorage.setItem('imgurl', this.user.photoUrl);
        localStorage.setItem('provider', this.user.provider);
        this.router.navigate(['/home']);
      } else {
        localStorage.clear();
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