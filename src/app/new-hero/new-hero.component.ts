import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.scss']
})
export class NewHeroComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  add(name: string): void {
    name = name.trim();
    if(!name) {
      return;
    }
    this.heroService.addHero({name} as Hero).subscribe(
      hero => {
        this.heroes.push(hero);
      } );
  }

  

}
