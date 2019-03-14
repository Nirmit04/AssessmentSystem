import { Component, OnInit } from '@angular/core';
import { TagModel } from '../../shared/tags.model';
import { ContentCreatorServiceService } from '../../shared/content-creator-service.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CreatetagComponent } from '../createtag/createtag.component';

@Component({
	selector: 'app-tag',
	templateUrl: './tag.component.html',
	styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
	tagList: TagModel[];
	constructor(private service: ContentCreatorServiceService,
		private router: Router,
		private dialog: MatDialog,
		private toastr: ToastrService) { }

	ngOnInit() {
		this.loadTags();
	}
	loadTags() {
		this.service.getTags().subscribe((res: any) => {
			console.log(res);
			this.tagList = res as TagModel[];
		});
	}
	onCreate() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
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
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		dialogConfig.data = this.tagList[id - 1];
		console.log(dialogConfig.data);
		let dialogRef = this.dialog.open(CreatetagComponent, dialogConfig).afterClosed().subscribe(res => {
			this.loadTags();
		});
	}
}
