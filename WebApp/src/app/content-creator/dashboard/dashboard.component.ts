import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContentCreatorComponent } from '../content-creator.component';
import { RetrieveQuestionBankComponent } from '../retrieve-question-bank/retrieve-question-bank.component';
import { stringify } from '@angular/core/src/render3/util';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
	constructor(private dialog: MatDialog) {}
	Val: string[];
	ngOnInit() {}
	Open(link) {
		this.Val = link;
		console.log(this.Val);
	}
	// onCreate() {
	// 	const dialogConfig = new MatDialogConfig();
	// 	dialogConfig.disableClose = true;
	// 	dialogConfig.autoFocus = true;
	// 	dialogConfig.width = '60%';
	// 	this.dialog.open(RetrieveQuestionBankComponent, dialogConfig);
	// }
}
