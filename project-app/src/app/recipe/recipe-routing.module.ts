import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { IdeasComponent } from './ideas/ideas.component';

const routes: Routes = [
  {
    path: 'recipes',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: IdeasComponent,
      },
      {
        path: ':recipeId',
        component: DetailsComponent,
      },
    ],
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'edit',
    component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
