import { Component, OnInit } from '@angular/core';
import { TagModel } from '../../../models/tags.model';
import { ContentCreatorService } from '../../../services/content-creator-service.service';
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

	public tagList: TagModel[];
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<TagModel> = new Subject();
	subscription: Subscription;
	public columns: any[];
	private index: number;

	constructor(private dialog: MatDialog,
		private httpService: HttpService) { }

	public ngOnInit(): void {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10,
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

	private loadTags(): void {
		this.httpService.getTags().subscribe((res: any) => {
			this.tagList = res as TagModel[];
			for (this.index = 1; this.index <= this.tagList.length; this.index++) {
				this.tagList[this.index - 1].SerialNumber = this.index;
			}
		});
	}

	public onCreate(): void {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		this.dialog.open(CreatetagComponent, dialogConfig).afterClosed().subscribe(result => {
			this.loadTags();
		});
	}

	public onEdit(tagId: number): void {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		dialogConfig.data = this.tagList[tagId - 1];
		const dialogRef = this.dialog.open(CreatetagComponent, dialogConfig).afterClosed().subscribe(res => {
			this.loadTags();
		});
		dialogRef.unsubscribe();
	}

	public ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}

}
