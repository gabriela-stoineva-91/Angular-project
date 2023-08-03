import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { Recipe } from 'src/app/types/recipe';
import { UserService } from 'src/app/user/user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

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
        Object.keys(recipes).forEach((x) =>
          this.recipeService.createPropertyId(x).subscribe()
        );
      },
      error: (error: string) => {
        console.error(`Error: ${error}`);
      },
    });
  }
}
