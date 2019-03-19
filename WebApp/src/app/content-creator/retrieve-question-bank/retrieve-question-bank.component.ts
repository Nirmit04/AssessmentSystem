import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Question } from '../shared/question.model';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { UpdateQuestionComponent } from '../update-question/update-question.component';
import { DataTablesModule } from 'angular-datatables';

@Component({
	selector: 'app-retrieve-question-bank',
	templateUrl: './retrieve-question-bank.component.html',
	styleUrls: ['./retrieve-question-bank.component.css']
})
export class RetrieveQuestionBankComponent implements OnInit {
	questionList: Question[];
	searchText = '';
	difficultyLevel = '';

	constructor(private service: ContentCreatorServiceService,
		private toastr: ToastrService,
		private dialog: MatDialog) { }

	ngOnInit() {
		this.getQuesOfUser(localStorage.getItem('uid'));
		this.searchText = '';
	}
	filter(ques: Question) {
		console.log(this.searchText+'hello');
		return (
			(ques.QuestionStatement.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
				|| ques.SubjectName.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1)
			&& ques.Difficulty.toLowerCase().indexOf(this.difficultyLevel.toLowerCase()) > -1
		);
	}
	filterSubject(event: any) {
		this.difficultyLevel = event.target.value;
		console.log(this.difficultyLevel);
	}

	getQuesOfUser(uid: string) {
		this.service.getQuesOfUser(uid).subscribe((data: any) => {
			this.questionList = data as Question[];
			console.log(this.questionList);
		})
	}
	deleteQues(qid) {
		if (confirm('Are you sure you want to delete this record?')) {
		this.service.deleteQues(qid).subscribe((res: any) => {
			this.toastr.success('Deleted Successfully', 'Assesment System');
			this.getQuesOfUser(localStorage.getItem('uid'));
		});
	}
	}
	editUserQues(quesid: number, arrayindex: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		this.service.readonlyStatus = false;
		this.service.formData = this.questionList[arrayindex - 1];
		this.dialog.open(UpdateQuestionComponent, dialogConfig).afterClosed().subscribe((res: any) => {
			console.log(res);
			this.getQuesOfUser(localStorage.getItem('uid'));
		});

	}
	viewUserQues(quesid: number, arrayindex: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		this.service.readonlyStatus = true;
		this.service.formData = this.questionList[arrayindex - 1];
		this.dialog.open(UpdateQuestionComponent, dialogConfig).afterClosed().subscribe((res: any) => {
		});

	}
}
