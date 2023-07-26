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
    return this.http.post<Recipe>(`${environment.apiUrl}/recipes.json`, {
      name,
      imageUrl,
      category,
      products,
      preparation,
      time,
    });
  }
}
