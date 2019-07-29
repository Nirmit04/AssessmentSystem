import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from '../shared/subject.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
	selector: 'app-create-questions',
	templateUrl: './create-questions.component.html',
	styleUrls: [ './create-questions.component.scss' ]
})
export class CreateQuestionsComponent implements OnInit, OnDestroy {
	public Subjects: Subject[];
	public CreatedBy = '';
	dropdownSettings = {};
	subscription: Subscription;
	constructor(public service: ContentCreatorServiceService, public toastr: ToastrService, private router: Router) {}
	ngOnInit() {
		this.resetForm();
		if (this.service.Difficulty != null) {
			this.service.formData.SubjectId = this.service.SubjectId.toString();
			this.service.formData.Difficulty = this.service.Difficulty;
		} else {
			if (this.service.QuestionType == null) {
				this.router.navigate([ '/cc-dash' ]);
			}
		}
		this.dropdownSettings = {
			singleSelection: false,
			idField: 'SubjectId',
			textField: 'Name',
			enableCheckAll: false,
			itemsShowLimit: 5,
			allowSearchFilter: true
		};
		this.subscription = this.service.retrieveSubjects().subscribe((res) => {
			this.Subjects = res as Subject[];
		});
	}

	private resetForm(form?: NgForm): void {
		if (form != null) {
			form.resetForm();
		}
		this.service.formData = {
			QuestionId: null,
			QuestionStatement: '',
			Option1: '',
			Option2: '',
			Option3: '',
			Option4: '',
			Answer: null,
			Marks: null,
			Difficulty: '',
			SubjectId: ''
		};
	}

	public chooseFile(event) {
		this.service.selectedFile = event.target.files.item(0);
	}

	public onSubmit(form: NgForm) {
		this.service.postQuestion(form.value).subscribe((res: any) => {
			this.toastr.success('Inserted successfully');
			this.service.selectedFile = null;
			this.resetForm(form);
			if (this.service.Difficulty != null) {
				this.service.formData.SubjectId = this.service.SubjectId.toString();
				this.service.formData.Difficulty = this.service.Difficulty;
			}
		});
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
