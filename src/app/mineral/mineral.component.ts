import { Component, OnInit } from '@angular/core';
import { Mineral } from '../mineral';
import { MINERALS } from '../mineral-list';

@Component({
  selector: 'app-mineral',
  templateUrl: './mineral.component.html',
  styleUrls: ['./mineral.component.css']
})
export class MineralComponent implements OnInit {

	minerals = MINERALS;

	mineral: Mineral = {
		id: 1,
		name: 'Durangite'
	};

  constructor() { }

  ngOnInit() {
  }

}