import { Component, OnInit } from '@angular/core';
import { Mineral } from '../mineral';
import { MineralService } from '../mineral.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  minerals: Mineral[] = [];

  constructor(private mineralService: MineralService) { }

  ngOnInit() {
    this.getMinerals();
  }

  getMinerals(): void {
    this.mineralService.getMinerals().subscribe(
    	minerals => this.minerals = minerals.slice(1, 5)
    );
  }
}