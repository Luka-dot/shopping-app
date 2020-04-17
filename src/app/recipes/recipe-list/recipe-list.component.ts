import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // defining type. TS will expect Recipe class[] with recipes in it
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Just a test recipe', 'https://upload.wikimedia.org/wikipedia/commons/4/4f/17th_Century_Food.jpg'),
    new Recipe('2nd Test Recipe', 'Just Another test recipe', 'https://upload.wikimedia.org/wikipedia/commons/4/4f/17th_Century_Food.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
