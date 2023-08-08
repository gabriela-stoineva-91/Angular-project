import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
  ],
})
export class SearchComponent implements OnInit {
  control = new FormControl('');
  recipes: any = [];
  //recipesToView: [] = [];
  filteredRecipes: Observable<any> = new Observable();

  constructor(private recipeService: RecipeService,
    private router: Router) {}
  ngOnInit() {
    this.filteredRecipes = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
      
    );
    this.takeValues()
    console.log(this.recipes)
  }
  takeValues(): void {
    this.recipeService.getAllRecipes().subscribe({
      next: (res) => {
        this.recipes = Object.values(res);
      },
    });
  }
 
  private _filter(value: string): string[] {
    
    return this.recipes.filter((x:any) => (x.products.includes(value)))
    
  
  }
  details(recipeId:string) {
    this.router.navigate(['recipes', `${recipeId}`])
  }
}
