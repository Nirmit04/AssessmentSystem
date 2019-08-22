import { Component, OnInit, Inject } from '@angular/core';
import { ContentCreatorService } from '../../../services/content-creator-service.service';
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

	public userId: string = '';
	public existingTags: TagModel[];
	public option: string = '';
	public tagExists: boolean = false;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data,
		public dialogRef: MatDialogRef<CreatetagComponent>,
		private service: ContentCreatorService,
		private toastr: ToastrService,
		private storageService: StorageService,
		private httpService: HttpService) { }

	public ngOnInit(): void {
		this.userId = this.storageService.getStorage('uid');
		if (this.data === null) {
			this.option = 'Create';
			this.resetForm();
		}
		else {
			this.option = 'Update';
			this.service.tagForm = this.data;
		}
		this.httpService.retrieveSubjects().subscribe((res: any) => {
			this.existingTags = res as TagModel[];
		});
	}

	public getSubjectId()	{
		
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

	public onSubmit(form: NgForm): void {
		this.httpService.postTags(form.value).subscribe(res => {
			this.toastr.success('Inserted successfully');
			this.resetForm(form);
			this.dialogRef.close('Inserted');
		});
	}

	public checkAvail(name: NgForm): void {
		for (let tag of this.existingTags) {
			if (tag.Name.toString().toLowerCase() === name.value.toString().toLowerCase()) {
				this.tagExists = true;
				break;
			}
			else {
				this.tagExists = false;
			}
		}
	}

}
