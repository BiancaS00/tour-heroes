import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Hero } from '../heroes/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', power: 'superpower' },
      { id: 13, name: 'Bombasto', power: 'superpower' },
      { id: 14, name: 'Celeritas', power: 'superpower' },
      { id: 15, name: 'Magneta', power: 'superpower' },
      { id: 16, name: 'RubberMan', power: 'superpower' },
      { id: 17, name: 'Dynama', power: 'superpower' },
      { id: 18, name: 'Dr. IQ', power: 'superpower' },
      { id: 19, name: 'Magma', power: 'superpower' },
      { id: 20, name: 'Tornado', power: 'superpower' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
