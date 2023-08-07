import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';
import { UserService } from 'src/app/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  recipe: Recipe | undefined;
  isDeleteClicked: boolean = false;
  isDeleted: boolean = false;
  token: any;
  ownerId: any;

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRecipe();
  }
  getRecipe(): void {
    const id = this.activatedRoute.snapshot.params['recipeId'];

    this.recipeService.getOneDetailsRecipe(id).subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }
  delete(): void {
    this.isDeleteClicked = true;
  }
  yes(): void {
    const id = this.activatedRoute.snapshot.params['recipeId'];
    this.recipeService.deleteRecipe(id).subscribe({
      next: () => {},
      error: (err: string) => alert(err),
    });
    this.isDeleted = true;
  }
  no(): void {
    this.isDeleteClicked = false;
  }
  comment(): void {
    const id = this.activatedRoute.snapshot.params['recipeId'];
  }
  get isOwner(): boolean {
    this.token = localStorage.getItem('user');
    this.ownerId = JSON.parse(this.token).userId;
    if (this.recipe?.ownerId === this.ownerId) {
      return true;
    } else {
      return false;
    }
  }
  commentHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const id = this.activatedRoute.snapshot.params['recipeId'];
    this.token = localStorage.getItem('user');
    this.ownerId = JSON.parse(this.token).userId;

    const { comment } = form.value;
    this.recipeService.addComment(id, comment, this.ownerId).subscribe({
      next: (res) => {},
      error: (err) => {
        alert(err.message);
      },
    });
  }
}
