import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { HttpClient } from '@angular/common/http';
import { IdeasComponent } from './ideas/ideas.component';
import { RouterModule } from '@angular/router';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    CreateComponent,
    DetailsComponent,
    EditComponent,
    IdeasComponent,
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    UserModule
  ],
  providers: [
    UserService
  ]
})
export class RecipeModule { }
