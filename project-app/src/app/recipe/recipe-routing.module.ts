import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { IdeasComponent } from './ideas/ideas.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: IdeasComponent,
  },
  {
    path: 'recipes/:recipeId',
    component: DetailsComponent,
  },
  {
    path: 'recipes/edit/:recipeId',
    component: EditComponent,
  },
  //   children: [
  //     {
  //       path: '',
  //       pathMatch: 'full',
  //       component: IdeasComponent,
  //     },

  //     {
  //       path: ':recipeId',
  //       children: [
  //         {
  //           path: '',
  //           pathMatch: 'full',
  //           component: DetailsComponent,
  //         },
  //         {
  //           path: 'edit',
  //           // redirectTo: EditComponent,
  //           component: EditComponent,
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    path: 'create',
    component: CreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
