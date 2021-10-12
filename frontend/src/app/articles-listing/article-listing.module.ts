import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticlesListingComponent} from "./articles-listing.component";
import {ArticleCardComponent} from "./article-card/article-card.component";
import { FavoriteArticleTogglerComponent } from './article-card/favorite-article-toggler/favorite-article-toggler.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [ArticlesListingComponent, ArticleCardComponent, FavoriteArticleTogglerComponent],
  exports: [
    ArticlesListingComponent
  ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ]
})
export class ArticleListingModule {
}
