import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
	name: string;
	position: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
	{ position: 1, name: 'Hydrogen' },
	{ position: 2, name: 'Helium' },
	{ position: 3, name: 'Lithium' },
	{ position: 4, name: 'Beryllium' },
	{ position: 5, name: 'Boron' },
	{ position: 6, name: 'Carbon' },
	{ position: 7, name: 'Nitrogen' },
	{ position: 8, name: 'Oxygen' },
	{ position: 9, name: 'Fluorine' },
	{ position: 10, name: 'Neon' }
];
@Component({
	selector: 'app-tag',
	templateUrl: './tag.component.html',
	styleUrls: [ './tag.component.css' ]
})
export class TagComponent implements OnInit {
	constructor() {}
	displayedColumns: string[] = [ 'position', 'name', 'action' ];
	dataSource = ELEMENT_DATA;
	ngOnInit() {}
}
