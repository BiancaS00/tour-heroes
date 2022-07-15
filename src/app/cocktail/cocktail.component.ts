import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../services/cocktail.service';
import { Cocktail } from './cocktail';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktailService.getCocktail().subscribe( data => {
      console.log(data);
    });
  }

}
