import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { Recipe } from 'src/app/types/recipe';
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
  ) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe({
      next: (recipes: Recipe[]) => {
        this.cookbook = Object.values(recipes);
      },
      error: (error) => {
        alert(error.message);
      },
    });
  }
}
