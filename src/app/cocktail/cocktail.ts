export interface Cocktail {
    idDrink: number;
    strDrink: string;
    strInstructions: string;
    strDrinkThumb: string;
}

export interface Drinks {
    drinks: Cocktail[];
}
