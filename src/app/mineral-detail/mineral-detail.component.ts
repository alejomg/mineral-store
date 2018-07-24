import { Component, OnInit, Input } from '@angular/core';

import { Mineral } from '../mineral';

@Component({
  selector: 'app-mineral-detail',
  templateUrl: './mineral-detail.component.html',
  styleUrls: ['./mineral-detail.component.css']
})
export class MineralDetailComponent implements OnInit {

	@Input() mineral: Mineral;

  constructor() { }

  ngOnInit() {
  }

}
