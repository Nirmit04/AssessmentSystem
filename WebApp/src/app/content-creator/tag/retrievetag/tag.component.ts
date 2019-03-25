import { Component, OnInit } from '@angular/core';
import { TagModel } from '../../shared/tags.model';
import { ContentCreatorServiceService } from '../../shared/content-creator-service.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CreatetagComponent } from '../createtag/createtag.component';
import { concat, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
@Component({
	selector: 'app-tag',
	templateUrl: './tag.component.html',
	styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
	tagList: TagModel[];
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<TagModel> = new Subject();
	subscription: Subscription;
	constructor(private service: ContentCreatorServiceService,
		private router: Router,
		private dialog: MatDialog,
		private toastr: ToastrService) { }

	ngOnInit() {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10,
		};
		this.loadTags();
	}
	loadTags() {
		this.service.getTags().subscribe((res: any) => {
			this.tagList = res as TagModel[];
			this.dtTrigger.next();
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
			this.dtTrigger.unsubscribe();
			this.dtTrigger.next();
		});
	}
	onEdit(id: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		dialogConfig.data = this.tagList[id - 1];
		let dialogRef = this.dialog.open(CreatetagComponent, dialogConfig).afterClosed().subscribe(res => {
			this.loadTags();
			this.dtTrigger.unsubscribe();
			this.dtTrigger.next();
		});
	}
	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}
}
