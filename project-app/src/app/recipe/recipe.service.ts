import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../types/recipe';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  createRecipe(
    name: string,
    imageUrl: string,
    category: string,
    products: string[],
    preparation: string,
    time: Number
  ) {
    const url = `${environment.apiUrl}/recipes.json`;

    return this.http.post<Recipe>(url, {
      name,
      imageUrl,
      category,
      products,
      preparation,
      time,
    });
  }

  getAllRecipes() {
    const url = `${environment.apiUrl}/recipes.json`;
    const urlNew = 'https://food-ideas-5aa9c-default-rtdb.firebaseio.com/recipes.json'
    return this.http.get<Recipe[]>(urlNew)
  }
}
