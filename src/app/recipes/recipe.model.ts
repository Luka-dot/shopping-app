import { Ingredient } from '../shared/ingredient.model';
// defining single recipe for use later thru app. MODEL
// TS public will allow to be accessed from anywhere

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}