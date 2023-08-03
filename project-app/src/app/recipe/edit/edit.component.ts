import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from 'src/app/types/recipe';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  recipe: Recipe | undefined

  constructor(private formBuilder: FormBuilder,
              private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.editRecipe()
  }

  editRecipe(): void {
  const id = this.activatedRoute.snapshot.params['recipeId'];
    this.recipeService.getOneDetailsRecipe(id).subscribe({
      next: (recipe)=> {
        this.recipe = recipe;
        console.log(this.recipe)
      }
    })
      
    
  }
}
