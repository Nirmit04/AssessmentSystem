import { Component, OnInit } from '@angular/core';
import { TagModel } from '../../shared/tags.model';
import { ContentCreatorServiceService } from '../../shared/content-creator-service.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CreatetagComponent } from '../createtag/createtag.component';
<<<<<<< HEAD

=======
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
@Component({
	selector: 'app-tag',
	templateUrl: './tag.component.html',
	styleUrls: ['./tag.component.css']
})
<<<<<<< HEAD
export class TagComponent implements OnInit {
	tagList: TagModel[];
=======

export class TagComponent implements OnInit {

	tagList: TagModel[];
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<TagModel> = new Subject();
	subscription: Subscription;
	cols: any[];
	i: number;

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
	constructor(private service: ContentCreatorServiceService,
		private router: Router,
		private dialog: MatDialog,
		private toastr: ToastrService) { }

	ngOnInit() {
<<<<<<< HEAD
		this.loadTags();
	}
	loadTags() {
		this.service.getTags().subscribe((res: any) => {
			console.log(res);
			this.tagList = res as TagModel[];
		});
	}
=======
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10,
		};
		this.cols = [
			{ field: 'SerialNumber', header: 'S NO' },
			{ field: 'Name', header: 'Subject' },
			{ field: 'Department', header: 'Department' }
		];
		setTimeout(() => {
			this.loadTags();
		}, 0);
	}

	loadTags() {
		this.service.getTags().subscribe((res: any) => {
			this.tagList = res as TagModel[];
			console.log(res);
			for (this.i = 1; this.i <= this.tagList.length; this.i++) {
				this.tagList[this.i - 1].SerialNumber = this.i;
			}
		});
	}

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
	onCreate() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
<<<<<<< HEAD
		let dialogRef = this.dialog.open(CreatetagComponent, dialogConfig);
		dialogRef.afterClosed().subscribe(result => {
			this.loadTags();
		});
	}
	// onDelete(id: number) {
	// 	console.log(id);
	// 	if (confirm('Are you sure you want to delete this record')) {
	// 		this.service.deleteTags(id).subscribe((res: any) => {
	// 			this.loadTags();
	// 			this.toastr.success('Deleted Successfully', 'Assesment System');
	// 		});
	// 	}
	// }
	onEdit(id: number) {
		// console.log(id);
=======
		let dialogRef = this.dialog.open(CreatetagComponent, dialogConfig).afterClosed().subscribe(result => {
			this.loadTags();
		});
	}

	onEdit(id: number) {
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		dialogConfig.data = this.tagList[id - 1];
<<<<<<< HEAD
=======
		console.log(id);
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
		console.log(dialogConfig.data);
		let dialogRef = this.dialog.open(CreatetagComponent, dialogConfig).afterClosed().subscribe(res => {
			this.loadTags();
		});
	}
<<<<<<< HEAD
=======

	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
}
