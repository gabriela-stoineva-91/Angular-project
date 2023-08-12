import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  myRecipes: any[] = [];
  token: any;
  ownerId: any;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('user');
    this.ownerId = JSON.parse(this.token).userId;

    this.recipeService.getAllRecipes().subscribe({
      next: (res) => {
        this.myRecipes = Object.values(res).filter(
          (x) => x.ownerId === this.ownerId
        );
      },
      error: (error) => {
        alert(error.message);
      },
    });
  }
}
