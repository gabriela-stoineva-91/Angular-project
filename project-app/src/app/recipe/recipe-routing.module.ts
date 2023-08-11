import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { IdeasComponent } from './ideas/ideas.component';
import { AccountComponent } from './account/account.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { RouteGuardGuard } from '../user/route-guard.guard';

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
    canActivate: [RouteGuardGuard]
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [RouteGuardGuard]
  },
  {
    path: 'account/:recipeId',
    component: DetailsComponent,
    canActivate: [RouteGuardGuard]
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
