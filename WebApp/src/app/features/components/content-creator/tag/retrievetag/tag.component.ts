import { Component, OnInit } from '@angular/core';
import { TagModel } from '../../../../models/tags.model';
import { ContentCreatorServiceService } from '../../../../services/content-creator-service.service';
import { Router } from '@angular/router';
import { MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
@Component({
	selector: 'app-tag',
	templateUrl: './tag.component.html',
	styleUrls: [ './tag.component.scss' ]
})
export class TagComponent implements OnInit {
	public tagList: TagModel[];
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<TagModel> = new Subject();
	public columns: any[];
	public index: number;

	constructor(private service: ContentCreatorServiceService) {}

	ngOnInit() {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10
		};
		this.columns = [
			{ field: 'SerialNumber', header: 'S NO' },
			{ field: 'Name', header: 'Subject' },
			{ field: 'Department', header: 'Department' }
		];
		setTimeout(() => {
			this.loadTags();
		}, 0);
	}

	loadTags() {
		const subscription = this.service.getTags().subscribe((res: any) => {
			this.tagList = res as TagModel[];
			for (this.index = 1; this.index <= this.tagList.length; this.index++) {
				this.tagList[this.index - 1].SerialNumber = this.index;
			}
		});
		subscription.unsubscribe();
	}

	onCreate() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '70%';
		dialogConfig.disableClose = true;
	}

	onEdit(id: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '70%';
		dialogConfig.disableClose = true;
		dialogConfig.data = this.tagList[id - 1];
	}

	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}
}
