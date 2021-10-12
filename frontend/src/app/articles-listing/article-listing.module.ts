import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticlesListingComponent} from "./articles-listing.component";
import {ArticleCardComponent} from "./article-card/article-card.component";
import { FavoriteArticleTogglerComponent } from './article-card/favorite-article-toggler/favorite-article-toggler.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AppRoutingModule} from "../app-routing.module";
import {CoreModule} from "../common/core.module";

@NgModule({
  declarations: [ArticlesListingComponent, ArticleCardComponent, FavoriteArticleTogglerComponent],
  exports: [
    ArticlesListingComponent,
    FavoriteArticleTogglerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
    CoreModule
  ]
})
export class ArticleListingModule {
}
