import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { Recipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  id: string | undefined;

  constructor(private recipeService: RecipeService, private router: Router) {}

  createRecipeSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { name, imageUrl, category, products, preparation, time } =
      form.value;

    this.recipeService
      .createRecipe(name, imageUrl, category, products, preparation, time)
      .subscribe({
        next: (res) => {
          this.id = res.name;
          this.createId(this.id);
          this.router.navigate(['/account']);
        },
      });
  }
  createId(id: string): void {
    this.recipeService.patchPropertyId(id).subscribe();
  }
}
