import { Component, OnInit, Inject } from '@angular/core';
import { ContentCreatorServiceService } from '../../../services/content-creator-service.service';
import { TagModel } from '../../../models/tags.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StorageService } from '../../../../../services/storage.service';
import { HttpService } from '../../../../../core/http/http.service';


@Component({
	selector: 'app-createtag',
	templateUrl: './createtag.component.html',
	styleUrls: ['./createtag.component.css']
})

export class CreatetagComponent implements OnInit {

	public model: TagModel;
	userId = "";
	existingTags: TagModel[];
	Option: string = '';
	tagExists = false;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data,
		public dialogRef: MatDialogRef<CreatetagComponent>,
		private service: ContentCreatorServiceService,
		private toastr: ToastrService,
		private storageService: StorageService,
		private httpService: HttpService) { }

	ngOnInit() {
		this.userId = this.storageService.getStorage('uid');
		if (this.data === null) {
			this.Option = 'Create';
			this.resetForm();
		}
		else {
			this.Option = 'Update';
			this.service.tagForm = this.data;
		}
		this.httpService.retrieveSubjects().subscribe((res: any) => {
			this.existingTags = res as TagModel[];
		});
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
		this.httpService.postTags(form.value).subscribe(res => {
			this.toastr.success('Inserted successfully');
			this.resetForm(form);
			this.dialogRef.close('Inserted');
		});
	}

	check_avail(name1: NgForm) {
		for (let tag of this.existingTags) {
			if (tag.Name.toString().toLowerCase() === name1.value.toString().toLowerCase()) {
				this.tagExists = true;
				break;
			}
			else {
				this.tagExists = false;
			}
		}
	}
}
