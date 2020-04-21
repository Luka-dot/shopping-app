import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // defining type. TS will expect Recipe class[] with recipes in it
  recipes: Recipe[];

  constructor(private recipeService: RecipeService ) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }


}
