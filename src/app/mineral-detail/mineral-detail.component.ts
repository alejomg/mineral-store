import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MineralService }  from '../mineral.service';
import { Mineral } from '../mineral';

@Component({
  selector: 'app-mineral-detail',
  templateUrl: './mineral-detail.component.html',
  styleUrls: ['./mineral-detail.component.css']
})
export class MineralDetailComponent implements OnInit {

	@Input() mineral: Mineral;

	constructor(private route: ActivatedRoute, private mineralService: MineralService, 
		private location: Location) { }

	ngOnInit() {
		this.getMineral();
	}

	getMineral(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.mineralService.getMineral(id).subscribe(
			mineral => this.mineral = mineral
		);
	}

	goBack(): void {
		this.location.back();
	}

}
