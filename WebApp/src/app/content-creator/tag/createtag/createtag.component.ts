import { Component, OnInit, Inject } from '@angular/core';
import { ContentCreatorServiceService } from '../../shared/content-creator-service.service';
import { TagModel } from '../../shared/tags.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
	selector: 'app-createtag',
	templateUrl: './createtag.component.html',
	styleUrls: ['./createtag.component.css']
})

export class CreatetagComponent implements OnInit {

	public model: TagModel;
	userId = "";
	Option: string = '';

	constructor(
		@Inject(MAT_DIALOG_DATA) public data,
		public dialogRef: MatDialogRef<CreatetagComponent>,
		private service: ContentCreatorServiceService,
		private toastr: ToastrService) { }

	ngOnInit() {
		this.userId = localStorage.getItem('uid');
		if (this.data === null) {
			this.Option = 'Create';
			this.resetForm();
		}
		else {
			this.Option = 'Update';
			this.service.tagForm = this.data;
		}
	}

	resetForm(form?: NgForm) {
		if (form != null) {
			form.resetForm();
		}
		this.service.tagForm = {
			SubjectId: null,
			Name: '',
			Department: ''
		};
	}

	onSubmit(form: NgForm) {
		this.service.postTags(form.value).subscribe(res => {
			this.toastr.success('Inserted successfully');
			this.resetForm(form);
			this.dialogRef.close('Inserted');
		});;
	}

}
