import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable()

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'this  is a simple test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another test recipe', 'this  is a simple test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
