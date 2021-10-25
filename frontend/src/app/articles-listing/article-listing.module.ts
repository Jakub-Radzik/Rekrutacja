import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticlesListingComponent} from "./articles-listing.component";
import {ArticleCardComponent} from "./article-card/article-card.component";
import {FavoriteArticleTogglerComponent} from './article-card/favorite-article-toggler/favorite-article-toggler.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AppRoutingModule} from "../app-routing.module";
import {CoreModule} from "../common/core.module";
import {ToolsComponent} from './tools/tools.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SingleArticleComponent} from "./single-article/single-article.component";

@NgModule({
  declarations: [ArticlesListingComponent, ArticleCardComponent, FavoriteArticleTogglerComponent, ToolsComponent, SingleArticleComponent],
  exports: [
    ArticlesListingComponent,
    FavoriteArticleTogglerComponent,
    SingleArticleComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
  ]
})
export class ArticleListingModule {
}
