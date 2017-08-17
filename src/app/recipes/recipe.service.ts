import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/640px-Chicken-kathi-roll-recipe.jpg'),
		new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://cdn.pixabay.com/photo/2016/02/02/15/33/dishes-1175493_960_720.jpg'),
		new Recipe('A Test Recipe 3', 'This is simply a test 3', 'https://static.pexels.com/photos/23086/food-restaurant-kitchen-meat-23086.jpg')
	];

	getRecipes() {
		return this.recipes.slice();
	}
}