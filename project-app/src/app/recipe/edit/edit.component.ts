import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from 'src/app/types/recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  recipe: Recipe | undefined;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  

  id = this.activatedRoute.snapshot.params['recipeId'];
  ngOnInit(): void {
    this.takeRecipe(this.id);
  }
  
  takeRecipe(id: string): void {
    this.recipeService.getOneDetailsRecipe(id).subscribe({
      next: (recipe) => {
        this.recipe = recipe;
      },
    });
  }

  editRecipeSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.recipeService.editRecipe(form.value, this.id).subscribe((res: any) => {
      this.router.navigate([`/recipes/${this.id}`]);
    });
  }
}
