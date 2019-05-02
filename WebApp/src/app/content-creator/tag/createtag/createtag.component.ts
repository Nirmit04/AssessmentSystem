import { Component, OnInit, Inject } from '@angular/core';
import { ContentCreatorServiceService } from '../../shared/content-creator-service.service';
import { TagModel } from '../../shared/tags.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
<<<<<<< HEAD
=======
import { forEach } from '@angular/router/src/utils/collection';
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165


@Component({
	selector: 'app-createtag',
	templateUrl: './createtag.component.html',
	styleUrls: ['./createtag.component.css']
})
<<<<<<< HEAD
export class CreatetagComponent implements OnInit {
	public model: TagModel;
	userId = "";
	Option: string = '';
=======

export class CreatetagComponent implements OnInit {

	public model: TagModel;
	userId = "";
	existingTags: TagModel[];
	Option: string = '';
	tagExists = false;

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
	constructor(
		@Inject(MAT_DIALOG_DATA) public data,
		public dialogRef: MatDialogRef<CreatetagComponent>,
		private service: ContentCreatorServiceService,
		private toastr: ToastrService) { }

	ngOnInit() {
<<<<<<< HEAD
		// console.log(this.service.tagForm);
		this.userId = localStorage.getItem('uid');
		if (this.data === null) {
			// console.log(this.service.tagForm);
=======
		this.userId = localStorage.getItem('uid');
		if (this.data === null) {
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
			this.Option = 'Create';
			this.resetForm();
		}
		else {
<<<<<<< HEAD
			// console.log(this.service.tagForm);
			this.Option = 'Update';
			this.service.tagForm = this.data;
			console.log(this.service.tagForm);
		}
	}
=======
			this.Option = 'Update';
			this.service.tagForm = this.data;
		}
		this.service.retrieveSubjects().subscribe((res: any) => {
			this.existingTags = res as TagModel[];
		});
	}

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
	resetForm(form?: NgForm) {
		if (form != null) {
			form.resetForm();
		}
<<<<<<< HEAD

=======
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
		this.service.tagForm = {
			SubjectId: null,
			Name: '',
			Department: ''
		};
	}
<<<<<<< HEAD
=======

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
	onSubmit(form: NgForm) {
		this.service.postTags(form.value).subscribe(res => {
			this.toastr.success('Inserted successfully');
			this.resetForm(form);
<<<<<<< HEAD
		});;
		//this.dialogRef.close();
=======
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
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
	}
}
