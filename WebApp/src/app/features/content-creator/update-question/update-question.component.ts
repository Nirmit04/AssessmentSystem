import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from '../shared/subject.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'app-update-question',
	templateUrl: './update-question.component.html',
	styleUrls: [ './update-question.component.scss' ]
})
export class UpdateQuestionComponent implements OnInit {
	public Subjects: Subject[];
	public createdBy = '';
	public flag: boolean = false;
	public label: string;
	public imagesource: string = null;
	public dropdownSettings = null;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data,
		public dialogRef: MatDialogRef<UpdateQuestionComponent>,
		public service: ContentCreatorServiceService,
		public toastr: ToastrService
	) {}

	ngOnInit() {
		this.flag = this.service.readonlyStatus;
		if (this.flag === true) {
			this.label = 'View Question';
		} else {
			this.label = 'Edit Questions';
		}
		if (this.service.formData.ImageName !== null) {
			this.imagesource = environment.imgURl + this.service.formData.ImageName;
		}
		this.dropdownSettings = {
			singleSelection: false,
			idField: 'SubjectId',
			textField: 'Name',
			enableCheckAll: false,
			itemsShowLimit: 5,
			allowSearchFilter: true
		};
		this.createdBy = localStorage.getItem('uid');
		const subscription = this.service.retrieveSubjects().subscribe((res) => {
			this.Subjects = res as Subject[];
		});
		subscription.unsubscribe();
	}

	private resetForm(form?: NgForm): void {
		if (form != null) {
			form.resetForm();
		}
		this.service.formData = {
			QuestionType: '',
			QuestionId: null,
			QuestionStatement: '',
			Option1: '',
			Option2: '',
			Option3: '',
			Option4: '',
			Answer: null,
			Marks: null,
			Difficulty: '',
			SubjectId: '',
			ImageName: null
		};
	}

	public chooseFile(event) {
		this.service.selectedFile = event.target.files.item(0);
	}

	public onSubmit(form: NgForm) {
		this.service.updateQuestion(form.value).subscribe((res) => {
			this.toastr.success('Updated successfully');
			this.service.selectedFile = null;
			this.service.formDataNew = null;
			this.dialogRef.close('Submitted');
		});
	}

	public deleteImg() {
		const subscription = this.service.deleteImageFromQues(this.service.formData.QuestionId).subscribe((res) => {
			this.toastr.success('Image Successfully Removed');
			this.dialogRef.close('Submitted');
		});
		subscription.unsubscribe();
	}
}
