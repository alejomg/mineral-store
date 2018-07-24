import { Injectable } from '@angular/core';
import { Mineral } from './mineral';
import { MINERALS } from './mineral-list';

@Injectable({
  providedIn: 'root'
})
export class MineralService {

	constructor() { }

	getMinerals(): Mineral[] {
		return MINERALS;
	}

}
