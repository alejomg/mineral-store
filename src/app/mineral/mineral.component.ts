import { Component, OnInit } from '@angular/core';
import { Mineral } from '../mineral';
import { MineralService } from '../mineral.service';

@Component({
  selector: 'app-mineral',
  templateUrl: './mineral.component.html',
  styleUrls: ['./mineral.component.css']
})
export class MineralComponent implements OnInit {

	minerals : Mineral[];

	constructor(private mineralService: MineralService) { }

	ngOnInit() {
		this.getMinerals();
	}

	getMinerals(): void {
		this.mineralService.getMinerals().subscribe(
			minerals => this.minerals = minerals
		);
	}

}
