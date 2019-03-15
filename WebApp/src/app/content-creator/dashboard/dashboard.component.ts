import { Component, OnInit } from '@angular/core';
import { ContentCreatorComponent } from '../content-creator.component';
import { RetrieveQuestionBankComponent } from '../retrieve-question-bank/retrieve-question-bank.component';
import { stringify } from '@angular/core/src/render3/util';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	constructor(private router: Router, private authService: AuthService, ) { }
	Val: string[];
	ngOnInit() {
		if (localStorage.getItem('id') === null) {
			this.router.navigate(['/login']);
		}
		this.authService.authState.subscribe((user) => {
			if (user != null) {
				//	console.log(user);
			} else {
				localStorage.clear();
				this.router.navigate(['/login']);
			}
		})
	}
	Open(link) {
		this.Val = link;
		console.log(this.Val);
	}
	logout() {
		this.authService.signOut();
	}
	// onCreate() {
	// 	const dialogConfig = new MatDialogConfig();
	// 	dialogConfig.disableClose = true;
	// 	dialogConfig.autoFocus = true;
	// 	dialogConfig.width = '60%';
	// 	this.dialog.open(RetrieveQuestionBankComponent, dialogConfig);
	// }
}
