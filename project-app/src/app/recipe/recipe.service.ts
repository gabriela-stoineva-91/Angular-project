import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../types/recipe';
import { environments } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { 

  }
  createTheme(
    name: string, 
    imageUrl: string, 
    category: string,
    products: string[],
    preparation: string,
    time: Number) 
    {
    return this.http.post<Recipe>('/api/themes', 
    {
      name, 
      imageUrl, 
      category, 
      products, 
      preparation, 
      time 
    });
  }
}
