import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../cocktail/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

  constructor(private http: HttpClient) { }

  getCocktail(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.cocktailUrl);
  }

}
