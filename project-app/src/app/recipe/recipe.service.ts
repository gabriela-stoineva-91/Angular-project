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

  constructor(private http: HttpClient) {}

  createRecipe(
    name: string,
    imageUrl: string,
    category: string,
    products: string,
    preparation: string,
    time: string,
    ownerId: string | undefined,
  ) {
    return this.http.post<Recipe>(`${this.urlRecipe}.json`, {
      name,
      imageUrl,
      category,
      products,
      preparation,
      time,
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
  addComment(id: string, inputValue: string) {
    return this.http.patch(`${this.urlRecipe}/comments/${id}.json`, {
      "comments": inputValue
    })
  }
}

//Object.keys(recipes).map((x)=> this.recipeService.patchPropertyId(x).subscribe())
