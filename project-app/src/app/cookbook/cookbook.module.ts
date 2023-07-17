import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookbookRoutingModule } from './cookbook-routing.module';
import { IdeasComponent } from './ideas/ideas.component';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [
    IdeasComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    CookbookRoutingModule
  ]
})
export class CookbookModule { }
