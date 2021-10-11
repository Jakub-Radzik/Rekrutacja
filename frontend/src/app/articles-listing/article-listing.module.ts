import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticlesListingComponent} from "./articles-listing.component";
import {ArticleCardComponent} from "./article-card/article-card.component";

@NgModule({
  declarations: [ArticlesListingComponent, ArticleCardComponent],
  exports: [
    ArticlesListingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArticleListingModule {
}
