import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../types/recipe';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  urlRecipe: string = `${environment.apiUrl}/recipes.json`;

  constructor(private http: HttpClient) {}

  createRecipe(
    name: string,
    imageUrl: string,
    category: string,
    products: string[],
    preparation: string,
    time: Number
  ) {
    return this.http.post<Recipe>(this.urlRecipe, {
      name,
      imageUrl,
      category,
      products,
      preparation,
      time,
    });
  }

  getAllRecipes() {
    return this.http.get<Recipe[]>(this.urlRecipe)
  }
  getOneDetailsRecipe(recipeId: string) {
    return this.http.get<Recipe[]>(`${environment.apiUrl}/recipeId/recipes.json`)
  }
}
