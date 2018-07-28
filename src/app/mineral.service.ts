import { Injectable } from '@angular/core';
import { Mineral } from './mineral';
import { MINERALS } from './mineral-list';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MineralService {

	constructor(private messageService : MessageService) { }

	getMinerals(): Observable<Mineral[]> {
		this.messageService.add("[MineralService]: Mineral list fetched!");
		return of(MINERALS);
	}

	getMineral(id: number): Observable<Mineral> {
		// backticks ( ` ) define a JavaScript template literal for embedding the id.
		this.messageService.add(`[MineralService]: Mineral id=${id} fetched!`);
		return of(MINERALS.find(mineral => mineral.id === id));
	}

}
