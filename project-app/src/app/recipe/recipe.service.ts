import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../types/recipe';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  urlRecipe: string = `${environment.apiUrl}/recipes`;
  urlComments: string = `${environment.apiUrl}/comments`

  constructor(private http: HttpClient) {}

  createRecipe(
    name: string,
    imageUrl: string,
    category: string,
    products: string,
    preparation: string,
    time: string,
    ownerId: string | null
  ) {
    return this.http.post<Recipe>(`${this.urlRecipe}.json`, {
      name,
      imageUrl,
      category,
      products,
      preparation,
      time,
      ownerId,
    });
  }

  getAllRecipes() {
    return this.http.get<Recipe[]>(`${this.urlRecipe}.json`);
  }

  getOneDetailsRecipe(id: string | undefined) {
    return this.http.get<Recipe>(`${this.urlRecipe}/${id}.json`);
  }
  patchPropertyId(id: string): any {
    return this.http.patch<Recipe>(`${this.urlRecipe}/${id}.json`, {
      recipeId: `${id}`,
    });
  }
  editRecipe(formValue: object, id: string): any {
    return this.http.patch<Recipe>(`${this.urlRecipe}/${id}.json`, formValue);
  }
  deleteRecipe(id: string) {
    return this.http.delete<Recipe>(`${this.urlRecipe}/${id}.json`);
  }
  addComment(id: string, inputValue: string, ownerId: string) {
    const obj = {
      comment: inputValue,
      recipeId: id,
      ownerId: ownerId,
    };
    return this.http.post(`${this.urlComments}.json`, obj);
  }
  allComments() {
    return this.http.get(`${this.urlComments}.json`)
  }
}
