import { Component, OnInit } from '@angular/core';
import { TagModel } from '../../../models/tags.model';
import { ContentCreatorServiceService } from '../../../services/content-creator-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreatetagComponent } from '../createtag/createtag.component';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { HttpService } from '../../../../../core/http/http.service';
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
	cols: any[];
	i: number;

	constructor(private service: ContentCreatorServiceService,
		private dialog: MatDialog,
		private httpService: HttpService) { }

	ngOnInit() {
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
		this.httpService.getTags().subscribe((res: any) => {
			this.tagList = res as TagModel[];
			console.log(res);
			for (this.i = 1; this.i <= this.tagList.length; this.i++) {
				this.tagList[this.i - 1].SerialNumber = this.i;
			}
		});
	}

	onCreate() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		const dialogRef = this.dialog.open(CreatetagComponent, dialogConfig).afterClosed().subscribe(result => {
			this.loadTags();
		});
	}

	onEdit(id: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		dialogConfig.data = this.tagList[id - 1];
		console.log(id);
		console.log(dialogConfig.data);
		let dialogRef = this.dialog.open(CreatetagComponent, dialogConfig).afterClosed().subscribe(res => {
			this.loadTags();
		});
	}

	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}

}
