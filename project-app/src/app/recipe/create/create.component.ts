import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/recipe/recipe.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  //constructor(private recipeService: RecipeService) {}
   constructor(private recipeService: RecipeService) {}

  createRecipeSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;

    }
    const { name, imageUrl, category, products, preparation, time } = form.value;

    this.recipeService
      .createRecipe(
        name,
        imageUrl,
        category,
        products,
        preparation,
        time
      )
      .subscribe(() => {
        console.log('done');
      });

    console.log(form.value);
  }

   
  }

