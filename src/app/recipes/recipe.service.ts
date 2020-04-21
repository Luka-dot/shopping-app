import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    // private will prevent to be accessible from outside. Only using it now to test and make sure what im accessing 
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Just a test recipe', 'https://upload.wikimedia.org/wikipedia/commons/4/4f/17th_Century_Food.jpg',
        [
            new Ingredient('Meat', 1)
        ]),
        new Recipe('2nd Test Recipe', 'Just Another test recipe', 'https://upload.wikimedia.org/wikipedia/commons/4/4f/17th_Century_Food.jpg',
        [
            new Ingredient('Potatoes', 2),
            new Ingredient('Mystery meat', 2)
        ])
      ];

      getRecipes() {
          // slice will return exact copy of this array.  Without slice() it would return reference to the array
          // only getting copy now!
          return this.recipes.slice();
      }
}