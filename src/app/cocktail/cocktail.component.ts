<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap } from 'rxjs';
>>>>>>> db7eafe8f0750f46371715940da9af98e652506c
import { CocktailService } from '../services/cocktail.service';
import { Cocktail } from './cocktail';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  cocktails: Cocktail[] = [];

  private _listFilter: string = '';

  constructor(private cocktailService: CocktailService) { }

  get listFilter(): string {
    return this._listFilter;
  }

  filteredCocktails: Cocktail[] = [];

  performFilter(filterBy: string): Cocktail[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.cocktails.filter((cocktail: Cocktail) => {
      return cocktail.strDrink.toLocaleLowerCase().includes(filterBy)
    });
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('Setter: ', value);
    this.filteredCocktails = this.performFilter(value);
    console.log(this.filteredCocktails);
  }

  ngOnInit(): void {
    this.cocktailService.getCocktail().subscribe(data => {
      this.cocktails = data.drinks;
    });
  }


}
