import { Component, OnInit, Inject } from '@angular/core';
import { ContentCreatorServiceService } from '../../../../services/content-creator-service.service';
import { TagModel } from '../../../../models/tags.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
	selector: 'app-createtag',
	templateUrl: './createtag.component.html',
	styleUrls: [ './createtag.component.scss' ]
})
export class CreatetagComponent implements OnInit {
	public userId = '';
	public existingTags: TagModel[];
	public Option: string = '';
	public tagExists = false;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data,
		public dialogRef: MatDialogRef<CreatetagComponent>,
		private service: ContentCreatorServiceService,
		private toastr: ToastrService
	) {}

	ngOnInit() {
		this.userId = localStorage.getItem('uid');
		if (this.data === null) {
			this.Option = 'Create';
			this.resetForm();
		} else {
			this.Option = 'Update';
			this.service.tagForm = this.data;
		}
		this.service.retrieveSubjects().subscribe((res: any) => {
			this.existingTags = res as TagModel[];
		});
	}

	private resetForm(form?: NgForm): void {
		if (form != null) {
			form.resetForm();
		}
		this.service.tagForm = {
			SubjectId: null,
			Name: '',
			Department: ''
		};
	}

	public onSubmit(form: NgForm) {
		const subscription = this.service.postTags(form.value).subscribe((res) => {
			this.toastr.success('Inserted successfully');
			this.resetForm(form);
			this.dialogRef.close('Inserted');
		});
		subscription.unsubscribe();
	}

	public check_avail(name1: NgForm) {
		for (let tag of this.existingTags) {
			if (tag.Name.toString().toLowerCase() === name1.value.toString().toLowerCase()) {
				this.tagExists = true;
				break;
			} else {
				this.tagExists = false;
			}
		}
	}
}
