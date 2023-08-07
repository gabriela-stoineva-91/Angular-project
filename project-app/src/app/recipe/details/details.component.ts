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
  comments: string[] = [];
  isEmptyComment: boolean = false;
  

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
      error: (err) => alert(err.message),
    });
    this.isDeleted = true;
  }
  no(): void {
    this.isDeleteClicked = false;
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
      next: (res) => {
        this.viewAllComments();
        form.reset()
      },
      error: (err) => {
        alert(err.message);
      },
    });
    
  }
  viewAllComments() {
    const id = this.activatedRoute.snapshot.params['recipeId'];
    this.recipeService.allComments().subscribe({
      next: (res) => {
        this.comments = Object.values(res).filter((x) => x.recipeId = id).map((a)=> a.comment);
        if (this.comments.length === 0) {
          this.isEmptyComment = true;
        }
      }
    })

  }
}
