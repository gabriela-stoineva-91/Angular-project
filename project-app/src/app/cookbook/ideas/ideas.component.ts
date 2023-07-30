import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { Recipe } from 'src/app/types/recipe';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css'],
})
export class IdeasComponent implements OnInit {
  cookbook: Recipe[]= [];
  isDone: boolean = true;


  constructor(
    private recipeService: RecipeService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe({
      next: (recipes) => {
       this.cookbook = Object.values(recipes); 
       console.log(this.cookbook)
      },
      error: (error: string) => {
        this.isDone = false;
        console.error(`Error: ${error}`);
      },
    }); 
  }
}
