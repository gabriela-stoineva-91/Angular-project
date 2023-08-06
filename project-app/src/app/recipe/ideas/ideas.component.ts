import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { Recipe } from 'src/app/types/recipe';
import { UserService } from 'src/app/user/user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css'],
})
export class IdeasComponent implements OnInit {
  cookbook: Recipe[] = [];
  recipeId: string | undefined;

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe({
      next: (recipes: Recipe[]) => {
        this.cookbook = Object.values(recipes);
      },
      error: (error: string) => {
        console.error(`Error: ${error}`);
      },
    });
  }
}
