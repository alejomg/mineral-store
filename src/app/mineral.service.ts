import { Injectable } from '@angular/core';
import { Mineral } from './mineral';
import { MINERALS } from './mineral-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MineralService {

	constructor() { }

	getMinerals(): Observable<Mineral[]> {
		return of(MINERALS);
	}

}
